import { put, takeEvery } from 'redux-saga/effects'
import {
  CART_ITEMS_COUNT_REQUEST,
  setCartItemsCountActionSucceeded,
  setCartItemsCountActionFailed,
  ADD_TO_CART_REQUEST,
  setAddToCartSucceeded,
  setAddToCartFailed,
} from 'sagaStore/actions'

function* updateCartItemsCount() {
  try {
    yield put(setCartItemsCountActionSucceeded())
  } catch (error) {
    console.log('[CART ITEMS COUNT ERROR]', error)
    yield put(setCartItemsCountActionFailed())
  }
}

function* updateCartItems(action) {
  try {
    yield put(setAddToCartSucceeded(action.payload))
  } catch (error) {
    console.log('[CART ITEMS ERROR]', error)
    yield put(setAddToCartFailed(action.payload))
  }
}

const cartSaga = [
  takeEvery(CART_ITEMS_COUNT_REQUEST, updateCartItemsCount),
  takeEvery(ADD_TO_CART_REQUEST, updateCartItems),
]

export default cartSaga
