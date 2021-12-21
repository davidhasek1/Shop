import { all } from 'redux-saga/effects'
//import sub sagas files
import example from 'sagaStore/example/sagas'
import layout from 'sagaStore/layout/sagas'
import cart from 'sagaStore/cart/sagas'
import checkout from 'sagaStore/checkout/sagas'

export default function* rootSaga() {
  //spread from sub sagas
  yield all([...example, ...layout, ...cart, ...checkout])
}
