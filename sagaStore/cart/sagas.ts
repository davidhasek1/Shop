import { put, takeEvery } from 'redux-saga/effects'
import {
  CART_ITEMS_COUNT_REQUEST,
  setCartItemsCountActionSucceeded,
  setCartItemsCountActionFailed,
  ADD_TO_CART_REQUEST,
  setAddToCartSucceeded,
  setAddToCartFailed,
  UPDATE_CART_REQUEST,
  setUpdateCartSuccessed,
  setUpdateCartFailed,
} from 'sagaStore/actions'

function* updateCartQuantity(action) {
  try {
    yield put(setUpdateCartSuccessed(action.productID, action.quantity))
  } catch (error) {
    console.log('[UPDATE QUANTITY ERROR]', error)
    yield put(setUpdateCartFailed())
  }
}

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
    yield put(setAddToCartSucceeded(action.payload, action.payloadQTY))
  } catch (error) {
    console.log('[CART ITEMS ERROR]', error)
    yield put(setAddToCartFailed(action.payload))
  }
}

const cartSaga = [
  takeEvery(CART_ITEMS_COUNT_REQUEST, updateCartItemsCount),
  takeEvery(ADD_TO_CART_REQUEST, updateCartItems),
  takeEvery(UPDATE_CART_REQUEST, updateCartQuantity),
]

export default cartSaga
