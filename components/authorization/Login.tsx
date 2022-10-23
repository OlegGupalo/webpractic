import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { Box, Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Authorization.module.scss'
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "utils/shemas/loginValidation";
import { SubmitHandler, useForm } from "react-hook-form";
import { setCookie } from "nookies";
import { Api } from "utils/api";
import { setUserData } from "redux/slices/user";
import { LoginDto } from "./dto/form.dto";

interface LoginFormProps {
    onType: () => void
}

interface IFormInput {
    login: String
    password: String
  }

export const LoginForm: React.FC<LoginFormProps> = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)

    const [formError, setFormError] = useState(null)

    const {register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginSchema)
    });
    const onSubmit = async (data: LoginDto) => {
        const response = await Api().user.login(data)
        console.log(data)
        // dispatch(setUserData(response))

    }

    return (
    <div className={styles.formAuth}>
        <Box sx={{
            width: '500px',
            position: 'relative',
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    {...register('login')}
                    error={!!errors.login?.message} 
                    helperText={errors.login?.message}
                    fullWidth
                    placeholder="E-mail почта"
                     />
                <Box sx={{position: 'relative', marginTop: '15px'}}>
                    <TextField
                        {...register('password')}

                        fullWidth
                        error={!!errors.password?.message} 
                        helperText={errors.password?.message}
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
                
                <Button type="submit" fullWidth variant="contained" size="large" sx={{marginTop: '15px'}}>
                    Войти
                </Button>
            </form>
            <Box className="mt-20">
                <Link href={{
                    pathname: '/auth/register'
                }}>Нет аккаунта? Зарегестрируйся</Link>
            </Box>
        </Box>
    </div>)
}