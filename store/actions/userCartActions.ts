import * as types from '../types'

export const AddToCartState = (productID) => async (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: productID,
  })
}

export const CartProductsCount = () => async (dispatch) => {
  dispatch({
    type: types.INC_COUNTER,
  })
}

export const showCustomerData = () => async (dispatch) => {
  dispatch({
    type: types.CUSTOMER_DATA,
  })
}
export const showShipment = () => async (dispatch) => {
  dispatch({
    type: types.SHIPMENT,
  })
}
export const showOrderSummary = () => async (dispatch) => {
  dispatch({
    type: types.SUMMARY,
  })
}
export const showThankYou = () => async (dispatch) => {
  dispatch({
    type: types.THANK_YOU,
  })
}
