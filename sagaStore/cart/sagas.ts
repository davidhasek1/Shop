import { Pura } from '@styled-icons/crypto'
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
  CART_REMOVE_ITEM_REQUEST,
  setCartRemoveSucceed,
  setCartRemoveFailed,
} from 'sagaStore/actions'

//TODO: fetch dat o productu nefetchovat v extra funci ale použít call() metodu

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

function* removeItemFormCart(action) {
  try {
    yield put(setCartRemoveSucceed(action.payload))
  } catch (error) {
    yield put(setCartRemoveFailed())
  }
}

const cartSaga = [
  takeEvery(CART_ITEMS_COUNT_REQUEST, updateCartItemsCount),
  takeEvery(ADD_TO_CART_REQUEST, updateCartItems),
  takeEvery(UPDATE_CART_REQUEST, updateCartQuantity),
  takeEvery(CART_TOTAL_REQUEST, cartTotal),
  takeEvery(CART_REMOVE_ITEM_REQUEST, removeItemFormCart)
]

export default cartSaga
