import {
  CART_ITEMS_COUNT_SUCCEEDED,
  CART_ITEMS_COUNT_FAILED,
  ADD_TO_CART_SUCCEEDED,
  ADD_TO_CART_FAILED,
  CartActionsTypes,
} from 'sagaStore/actions'
import { CartItemType } from 'types'

const initialState = {
  cartItemsCount: 0,
  cartItems: [],
}

const cartReducer = (state = initialState, action: CartActionsTypes) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCEEDED:
      const newCartItem = action.payload

      const cartItem: CartItemType = {
        productID: newCartItem._id,
        imageUrl: newCartItem.Images.formats.small.url,
        title: newCartItem.Title,
        price: newCartItem.Price,
        //TODO: quantity
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
        cartItemsCount: 0, //Když se něco podělá vrať prázdný košík
      }
    default:
      return state
  }
}

export default cartReducer
