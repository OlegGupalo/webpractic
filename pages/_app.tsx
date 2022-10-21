import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/header/Header'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>MyJournal</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
    </Head>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    
  </>
  )
}

export default MyApp
