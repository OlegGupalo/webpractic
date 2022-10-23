import React, { useState } from "react";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Authorization.module.scss'
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectUserData, setUserData } from "redux/slices/user";
import { Api } from "utils/api";
import { setCookie } from "nookies";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "utils/shemas/registerValidation";
import { RegisterDto } from "./dto/form.dto";

enum RoleEnum {
    student = "student",
    teacher = "teacher"
}

interface IFormInput {
    name: String
    surname: String
    login: String
    password: String
    role: RoleEnum
    department: String
}

export const RegisterForm: React.FC = () => {
    const selector = useAppSelector(selectUserData)
    const dispatch = useAppDispatch()
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [err, setErr] = useState(null)
    

    const [formError, setFormError] = useState(null)

    const {register, handleSubmit, formState: {errors, isValid} } = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterSchema)
    });
    const onSubmit = async (data: RegisterDto) => {
        try {
            const response = await Api().user.singUp(data)
            console.log(response.data.access)
            setCookie(null, 'token', response.data.access, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            })
        } catch (error) {
            setErr(error.response.body)
        }
    }
    return (
        <div className={styles.formAuth}>
            <Box sx={{
                width: '500px',
                position: 'relative',
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField 
                            {...register('name')}
                            fullWidth
                            error={!!errors.name?.message} 
                            helperText={errors.name?.message}
                            placeholder="Имя"
                        />
                        <TextField
                            sx={{
                                margin: '15px 0px 15px 0px'
                            }} 
                            {...register('surname')}
                            error={!!errors.surname?.message} 
                            helperText={errors.surname?.message}
                            fullWidth
                            placeholder="Фамилия"
                        />
                        <TextField 
                            {...register('login')}
                            error={!!errors.login?.message} 
                            helperText={errors.login?.message}
                            fullWidth
                            placeholder="E-mail"
                        />
                    <Box sx={{position: 'relative', marginTop: '15px'}}>
                        <TextField
                            {...register('password')}
                            error={!!errors.password?.message} 
                            helperText={errors.password?.message}
                            fullWidth
                            placeholder="Пароль"

                            type={visiblePassword ? '' : 'password'} />
                        <IconButton 
                        onClick={() => setVisiblePassword(!visiblePassword)}
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            left: '450px'
                        }}
                        >
                            <VisibilityIcon />
                        </IconButton>
                    </Box>
                    <FormControl fullWidth className="mt-15">
                        <InputLabel>Вы</InputLabel>
                        <Select
                            {...register('role')}
                            error={!!errors.role?.message} 
                            helperText={errors.role?.message}
                            label="Вы"
                        >
                            <MenuItem value={"student"}>Студент</MenuItem>
                            <MenuItem value={"teacher"}>Преподаватель</MenuItem>
                        </Select>
                        
                    </FormControl>
                    
                    <Button 
                        type="submit"
                        fullWidth 
                        variant="contained" 
                        size="large" 
                        sx={{marginTop: '15px'}}>
                            Зарегестрироваться
                    </Button>
                </form>
                <Box className="mt-20">
                    <Link href={{
                        pathname: '/auth/login'
                    }}>Уже есть аккаунт? Войди</Link>
                </Box>
            </Box>
        </div>
    )
}