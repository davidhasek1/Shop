import { all } from 'redux-saga/effects'
//import sub sagas files
import example from 'sagaStore/example/sagas'

export default function* rootSaga() {
  //spread from sub sagas
  yield all([...example])
}
