import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/header/Header'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { store, wrapper } from '../redux/store'
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Api } from 'utils/api'
import { Construction } from '@mui/icons-material'
import { parseCookies } from 'nookies'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
    <Head>
      <title>PSTU</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet" />
    </Head>
      <CssBaseline />
      <Provider store={store}>
          <Header />
        <Component {...pageProps} />
      </Provider>
  </>
  )
}

// MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ctx, Component}) => {
//   try {
//     const authData = await Api(ctx).user.profile()
//     store.dispatch(setUserData(authData))
//   } catch (error) {
//     store.dispatch(setUserData(null))
//   }
  
    
//     return {
//       pageProps: {
//         ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
//       },
//     }
  
// })

// export default wrapper.withRedux(MyApp)

export default MyApp
