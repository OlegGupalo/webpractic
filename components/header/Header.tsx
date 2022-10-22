import { AppBar, Box, Button, Container, Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
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
    {
        title: 'Другое',
        href: ''
    }
]

export const Header: React.FC = () => {
    return (<>
        <AppBar position="static" classes={{root: styles.header}}>
            <Container classes={{root: styles.container}}>
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
                                    variant="contained" 
                                    className={styles.text} 
                                    color="success">
                                        {item.title}
                                </Button>
                            </Link>

                        )}
                    </Toolbar>
                    <Button variant="contained" color="error" classes={{root: styles.button1}}>Account</Button>
                    <Link href={{
                        pathname: '/auth/login'
                    }}>
                        <Button variant="contained" color="error" classes={{root: styles.button}}>
                            Войти
                        </Button>
                    </Link>
                    
                </Toolbar>
                
            </Container>
            
        </AppBar>
        </>)
}