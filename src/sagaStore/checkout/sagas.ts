import { put, takeEvery } from 'redux-saga/effects'

import {
  CHECKOUT_CUSTOMER_FORM_REQUEST,
  setCustomerFormSucceed,
  setCustomerFormFailed,
} from 'sagaStore/actions'

function* customerFormSubmit(action) {
  console.log(action)
  try {
    yield put(setCustomerFormSucceed(action.payload))
  } catch (error) {
    console.log('[CUSTOMER FORM FAILED]', error)
    yield put(setCustomerFormFailed())
  }
}

const checkoutSaga = [
  takeEvery(CHECKOUT_CUSTOMER_FORM_REQUEST, customerFormSubmit),
]

export default checkoutSaga
