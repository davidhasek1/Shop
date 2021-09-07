import {
  CART_ITEMS_COUNT_SUCCEEDED,
  CART_ITEMS_COUNT_FAILED,
  ADD_TO_CART_SUCCEEDED,
  ADD_TO_CART_FAILED,
  UPDATE_CART_SUCCEESS,
  UPDATE_CART_FAILED,
  CartActionsTypes,
} from 'sagaStore/actions'
import { CartItemType } from 'types'

const initialState = {
  cartItemsCount: 0,
  cartItems: [],
}

const cartReducer = (state = initialState, action: CartActionsTypes) => {
  switch (action.type) {
    case UPDATE_CART_SUCCEESS:
      const foundItemToUpdate = state.cartItems.find(
        (item) => item.productID === action.productID
      )
      const indexToUpdate = state.cartItems.findIndex(
        (item) => item.productID === action.productID
      )

      if (foundItemToUpdate) {
        const items = state.cartItems
        items[indexToUpdate].quantity = action.quantity
        return {
          ...state,
          cartItems: items,
        }
      }

    case UPDATE_CART_FAILED:
      return {
        ...state,
      }
    case ADD_TO_CART_SUCCEEDED:
      const newCartItem = action.payload

      const cartItem: CartItemType = {
        productID: newCartItem._id,
        imageUrl: newCartItem.Images.formats.small.url,
        title: newCartItem.Title,
        price: newCartItem.Price,
        quantity: action.payloadQTY,
      }
      const updatedItems = [cartItem, ...state.cartItems]

      return {
        ...state,
        cartItems: updatedItems,
      }
    case ADD_TO_CART_FAILED:
      return {
        ...state, //Když se něco nepovede tak nepřidávej nový produkt do pole produktů
      }
    case CART_ITEMS_COUNT_SUCCEEDED:
      return {
        ...state,
        cartItemsCount: state.cartItemsCount + 1,
      }
    case CART_ITEMS_COUNT_FAILED:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default cartReducer
