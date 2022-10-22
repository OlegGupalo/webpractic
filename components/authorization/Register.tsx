import React, { useState } from "react";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Authorization.module.scss'
import Link from "next/link";

export const RegisterForm: React.FC = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [role, setRole] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string)
    }

    return (
        <div className={styles.formAuth}>
        <Box sx={{
            width: '500px',
            position: 'relative',
        }}>
            <form>
                <TextField 
                    
                    fullWidth
                    placeholder="E-mail почта"
                     />
                <Box sx={{position: 'relative', marginTop: '15px'}}>
                    <TextField
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
                        value={role}
                        onChange={handleChange}
                        label="Вы"
                    >
                        <MenuItem value={10}>Студент</MenuItem>
                        <MenuItem value={20}>Преподаватель</MenuItem>
                        <MenuItem value={30}>Администратор</MenuItem>
                    </Select>
                </FormControl>
                
                <Button 
                    fullWidth 
                    variant="contained" 
                    size="large" 
                    sx={{marginTop: '15px'}}>
                        Зарегистрироваться
                </Button>
            </form>
            <Box className="mt-20">
                <Link href={{
                    pathname: '/auth/login'
                }}>Уже есть аккаунт? Войти</Link>
            </Box>
        </Box>
    </div>
    )
}