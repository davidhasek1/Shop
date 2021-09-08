import { put, takeEvery } from 'redux-saga/effects'
import {
  CART_ITEMS_COUNT_REQUEST,
  setCartItemsCountActionSucceed,
  setCartItemsCountActionFailed,
  ADD_TO_CART_REQUEST,
  setAddToCartSucceed,
  setAddToCartFailed,
  UPDATE_CART_REQUEST,
  setUpdateCartSuccessed,
  setUpdateCartFailed,
  CART_TOTAL_REQUEST,
  setCartTotalSucceed,
  setCartTotalFailed,
} from 'sagaStore/actions'

function* cartTotal() {
  try {
    yield put(setCartTotalSucceed())
  } catch (error) {
    yield put(setCartTotalFailed())
  }
}

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
    yield put(setCartItemsCountActionSucceed())
  } catch (error) {
    console.log('[CART ITEMS COUNT ERROR]', error)
    yield put(setCartItemsCountActionFailed())
  }
}

function* updateCartItems(action) {
  try {
    yield put(setAddToCartSucceed(action.payload))
  } catch (error) {
    console.log('[CART ITEMS ERROR]', error)
    yield put(setAddToCartFailed(action.payload))
  }
}

const cartSaga = [
  takeEvery(CART_ITEMS_COUNT_REQUEST, updateCartItemsCount),
  takeEvery(ADD_TO_CART_REQUEST, updateCartItems),
  takeEvery(UPDATE_CART_REQUEST, updateCartQuantity),
  takeEvery(CART_TOTAL_REQUEST, cartTotal),
]

export default cartSaga
