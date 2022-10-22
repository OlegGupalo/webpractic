import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { Box, Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './Authorization.module.scss'
import Link from "next/link";

export const LoginForm: React.FC = () => {
    const [visiblePassword, setVisiblePassword] = useState(false)

    return (
    <div className={styles.formAuth}>
        <Box sx={{
            width: '500px',
            position: 'relative',
        }} classes={{root: styles.box}}>
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
                
                <Button fullWidth variant="contained" size="large" sx={{marginTop: '15px'}} classes={{root: styles.enter}}>Войти</Button>
            </form>
            <Box className="mt-20" classes={{root: styles.mt}}>
                <Link href={{
                    pathname: '/auth/register'
                }}>Нет аккаунта? Зарегистрироваться</Link>
            </Box>
        </Box>
    </div>)
}