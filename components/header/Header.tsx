import { AppBar, Box, Button, Container, Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { parseCookies } from "nookies";
import React from "react";
import styles from './Header.module.scss'

const items = [
    {
        title: 'Главная',
        href: '/'
    }, 
    {
        title: 'Расписание',
        href: '/timetable'
    },
]

export const Header: React.FC = () => {
    return (<>
        <AppBar position="static">
            <Container>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '500px'
                    }}>
                        {items.map((item,key) => 
                            <Link href={{
                                pathname: item.href
                            }}>
                                <Button 
                                    size='large' 
                                    component='p' 
                                    key={key} 
                                    className={styles.text} 
                                    color="secondary">
                                        {item.title}
                                </Button>
                            </Link>

                        )}
                    </Toolbar>
                    {parseCookies().pepper
                        ? <Link href={{
                            pathname: '/profile'
                        }}>
                            <Button variant="contained" color="info">
                                Профиль
                            </Button>
                        </Link>
                        : <Link href={{
                            pathname: '/auth/login'
                        }}>
                            <Button variant="contained" color="error">
                                Войти
                            </Button>
                        </Link>
                    }
                    
                    
                </Toolbar>
                
            </Container>
            
        </AppBar>
        </>)
}