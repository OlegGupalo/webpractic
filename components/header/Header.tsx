import { AppBar, Box, Button, Container, Drawer, List, ListItem, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from './Header.module.scss'

const drawer = (
    <Box>
        <List>
            <ListItem>
                Главная
            </ListItem>
            <ListItem>
                Другое
            </ListItem>
            <ListItem>
                Остальное
            </ListItem>
        </List>
    </Box>
)

const items = [
    {
        title: 'Главная',
        href: '/'
    }, 
    {
        title: 'Остальное',
        href: '/'
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
                            <Button size='large' component='p' key={key} variant="contained" className={styles.text} color="success">
                                <Link href={{
                                    pathname: item.href
                                }}>
                                    {item.title}

                                </Link>
                            </Button>
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