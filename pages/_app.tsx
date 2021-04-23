import App from "next/app";
import React from "react";
import { Provider, RootStateOrAny, connect } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import {ThemeProvider} from 'styled-components'
import store from "../store/store";
import GlobalStyles from "../styles/globalStyles";
import Layout from "../components/Layout";
import theme from '../utils/theme'

class MyApp extends App {
  render() {
    //@ts-ignore
    const { Component, pageProps, handlers } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
        </Provider>
      </ThemeProvider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

function mapStateToProps(state: RootStateOrAny) {
  const { handlers } = state;
  return { handlers: handlers };
}

export default wrapper.withRedux(connect(mapStateToProps)(MyApp));
