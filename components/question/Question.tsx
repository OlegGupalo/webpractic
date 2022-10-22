import { CenterFocusStrong } from "@mui/icons-material"
import { Box, Button, Grid, TextField, Toolbar, Typography } from "@mui/material"
import Image from "next/image"
import styles from './Question.module.scss'

export const Question = () => {
    return (
        <Box sx={{
            backgroundImage: 'linear-gradient(to right, #6190E8, #A7BFE8)',
            width: '50rem',
            boxShadow: '0 4px 15px 0 rgba(45, 54, 65, 0.75)',
            margin: '100px 0 0 9rem',
            borderRadius: '80px',
            paddingBottom: '20px'
        }} >
            <Typography variant="h1" classes={{root: styles.questionTitle}}>
                Задать вопрос ректору
            </Typography>
                <Box classes={{root: styles.boxx}}>
                    <Grid container sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        
                    }}>
                            <TextField 
                                placeholder="Имя"
                                classes={{root: styles.defaultInput}}
                                inputProps={{sx: {
                                    width: '310px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    border: '1px solid #f5faff',
                                    color: 'black',
                                    fontWeight: '600',
                                    fontSize: '20px',
                                    backgroundColor: '#f5faff',
                                }}}
                            />
                            <TextField 
                                placeholder="E-mail"
                                inputProps={{sx: {
                                    width: '310px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    border: '1px solid #f5faff',
                                    color: 'black',
                                    fontWeight: '600',
                                    fontSize: '20px',
                                    backgroundColor: '#f5faff',
                                }}} 
                            />
                    </Grid>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <TextField
                            placeholder="Ваше сообщение"
                            multiline
                            maxRows={4}
                            InputProps={{sx: {
                                marginTop: '15px',
                                height: 140,
                                fontSize: 20,
                                fontFamily: 'Montserrat, sans-serif',
                                letterSpacing: '1.5px',
                                margin: '15px 0px',
                                width: '45rem',
                                border: '1px solid #f5faff',
                                color: 'black',
                                fontWeight: '500',
                                backgroundColor: '#f5faff',
                                borderRadius: '20px',
                            }}}
                        />
                    </Box>
                    
                    <Button
                        classes={{root: styles.button}}
                        size="large"
                        variant="contained"
                    >Задать вопрос</Button>
                    
            </Box>
        </Box>)
}