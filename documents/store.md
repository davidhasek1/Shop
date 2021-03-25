# Next.js Redux - https://www.youtube.com/watch?v=UXMGGI3TSs4&t=302s&ab_channel=NepalCodeTV

Toto je předpis souboru `store.ts`

Mělo by to stačit

```
import { createStore, applyMiddleware } from "redux"; //znam
import thunk from "redux-thunk";  //znam
import { composeWithDevTools } from "redux-devtools-extension"; //znam

import rootReducer from "./reducers"; //import reducerů

const initialState = {};  //NASTAVIT Initial state
const middleware = [thunk]; //Takto se nastavuje thunk middleware

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
```

## \_app.tsx

```
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper"; //lib
import store from "../store/store";

import GlobalStyles from "../styles/globalStyles";

/* Class base místo functional !!! */

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>  //znam
        <GlobalStyles />
        <Component {...pageProps}></Component>;
      </Provider>
    );
  }
}

const makeStore = () => store;  //makeStore
const wrapper = createWrapper(makeStore)  //duležité pro nextjs funkci

export default wrapper.withRedux(MyApp) //takto vyexportovat - withRedux HOC je už ve wrapperu kerý je z libky

```

"next-redux-wrapper": "^6.0.2",
"react-redux": "^7.2.3",
"redux": "^4.0.5",
"redux-devtools-extension": "^2.13.9",
"redux-thunk": "^2.3.0",
