import App from "next/app";
import React from "react";
import { Provider, RootStateOrAny, connect } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import GlobalStyles from "../styles/globalStyles";

class MyApp extends App {
  render() {
    //@ts-ignore
    const { Component, pageProps, handlers } = this.props;

    return (
      <Provider store={store}>
        <GlobalStyles modalOpened={handlers.isProductDetailOpen} />
        <Component {...pageProps}></Component>
      </Provider>
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
