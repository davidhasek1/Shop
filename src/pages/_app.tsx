import React from 'react'
import App, { AppContext, AppInitialProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { breakpoint } from 'utils/responsivity'
import { url } from '../config'
import sagaStore from 'sagaStore'
import GlobalStyles from '../styles/globalStyles'
import theme from 'src/styles/theme'

import Layout from '../components/Layout'

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    let footer = null

    try {
      const api = await fetch(`${url}/footer`)
      footer = await api.json()
    } catch (error) {
      console.log('[ERROR: APP.tsx]', error)
    }
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
      footer,
    }
    return {
      pageProps,
    }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={{ ...theme, breakpoint }}>
        <Provider store={sagaStore}>
          <GlobalStyles />
          <Layout footerContent={pageProps.footer}>
            <Component {...pageProps}></Component>
          </Layout>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default MyApp
