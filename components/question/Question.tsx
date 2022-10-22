import { Box, Button, Grid, TextField, Toolbar, Typography } from "@mui/material"
import Image from "next/image"
import styles from './Question.module.scss'

export const Question = () => {
    return (
        <Box sx={{
            backgroundImage: 'linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B)',
            boxShadow: '0 4px 15px 0 rgba(236, 116, 149, 0.75)',
            margin: '75px 0px 0px 0px',
            borderRadius: '80px',
            paddingBottom: '20px'
        }}>
            <Typography variant="h1" classes={{root: styles.questionTitle}}>
                Задать вопрос ректору
            </Typography>
                <Box >
                    <Grid container sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>
                            <TextField 
                                placeholder="Имя"
                                classes={{root: styles.defaultInput}}
                                inputProps={{sx: {
                                    width: '420px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    border: '1px solid wheat',
                                    color: 'black',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    backgroundColor: 'wheat',
                                    borderRadius: '20px',
                                }}}
                            />
                            <TextField 
                                placeholder="E-mail"
                                inputProps={{sx: {
                                    width: '420px',
                                    fontFamily: 'Montserrat, sans-serif',
                                    border: '1px solid wheat',
                                    color: 'black',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    backgroundColor: 'wheat',
                                    borderRadius: '20px',
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
                                width: '968px',
                                border: '1px solid wheat',
                                color: 'black',
                                fontWeight: '700',
                                backgroundColor: 'wheat',
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