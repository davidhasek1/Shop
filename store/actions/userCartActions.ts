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

export const showCustomerData = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.CUSTOMER_DATA,
    customerDataOpened: isOpen
  })
}
export const showShipment = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.SHIPMENT,
    shipmentOpened: isOpen
  })
}
export const showOrderSummary = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.SUMMARY,
    summaryOpened: isOpen
  })
}
export const showThankYou = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.THANK_YOU,
    thankYouOpened: isOpen
  })
}
