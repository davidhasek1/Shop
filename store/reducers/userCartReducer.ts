import * as types from '../types'

const initialState = {
  cartItems: [],
  itemsCount: 0,
  showCustomerData: false,
  showShipment: false,
  showSummary: false,
  showThankYou: false,
}

export const userCartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const items = state.cartItems
      items.push(action.payload)
      return {
        ...state,
        cartItems: items,
      }
    case types.INC_COUNTER:
      return {
        ...state,
        itemsCount: state.itemsCount + 1,
      }
    case types.CUSTOMER_DATA:
      return {
        ...state,
        showCustomerData: action.customerDataOpened,
      }
    case types.SHIPMENT:
      return {
        ...state,
        showShipment: action.shipmentOpened,
      }
    case types.SUMMARY:
      return {
        ...state,
        showSummary: action.summaryOpened,
      }
    case types.THANK_YOU:
      return {
        ...state,
        showThankYou: action.thankYouOpened,
      }

    default:
      return state
  }
}
