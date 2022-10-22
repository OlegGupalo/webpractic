import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/header/Header'
import { CssBaseline, ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>MyJournal</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
    </Head>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    
  </>
  )
}

export default MyApp
