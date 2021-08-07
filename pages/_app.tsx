import React from 'react'
import App, { AppContext, AppInitialProps } from 'next/app'
import { Provider, RootStateOrAny, connect } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { ThemeProvider } from 'styled-components'
import { url } from '../config'
import store from '../store/store'
import sagaStore from 'sagaStore'
import GlobalStyles from '../styles/globalStyles'
import theme from 'styles/theme'

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
      <ThemeProvider theme={theme}>
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

const makeStore = () => store
const wrapper = createWrapper(makeStore)

function mapStateToProps(state: RootStateOrAny) {
  const { handlers } = state
  return { handlers: handlers }
}

export default wrapper.withRedux(connect(mapStateToProps)(MyApp))
