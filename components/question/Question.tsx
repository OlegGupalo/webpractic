import { Box, Button, Grid, TextField, Toolbar, Typography } from "@mui/material"
import Image from "next/image"
import styles from './Question.module.scss'

export const Question = () => {
    return (
        <Box sx={{
            backgroundColor: '#E8E9EB',
            margin: '20px 0px'
        }}>
            <Typography variant="h1" classes={{root: styles.questionTitle}}>
                Задать вопрос ректору
            </Typography>
                <Box>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField 
                                placeholder="Имя"
                                fullWidth
                                inputProps={{sx: {
                                    fontFamily: 'Montserrat, sans-serif'
                                }}}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                placeholder="E-mail"
                                fullWidth
                                inputProps={{sx: {
                                    fontFamily: 'Montserrat, sans-serif'
                                }}} 
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        placeholder="Ваше сообщение"
                        multiline
                        maxRows={4}
                        fullWidth
                        InputProps={{sx: {
                            height: 140,
                            fontSize: 20,
                            fontFamily: 'Montserrat, sans-serif',
                            letterSpacing: '1.5px',
                            margin: '15px 0px'
                        }}}
                    />
                    <Button
                        variant="contained"
                    >Задать вопрос</Button>
                    
            </Box>
        </Box>)
}