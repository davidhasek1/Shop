import {
  CART_ITEMS_COUNT_SUCCEED,
  CART_ITEMS_COUNT_FAILED,
  ADD_TO_CART_SUCCEED,
  ADD_TO_CART_FAILED,
  UPDATE_CART_SUCCEED,
  UPDATE_CART_FAILED,
  CART_TOTAL_SUCCEED,
  CART_TOTAL_FAILED,
  CART_REMOVE_ITEM_SUCCEED,
  CART_REMOVE_ITEM_FAILED,
  CartActionsTypes,
} from 'sagaStore/actions'
import { CartItemType } from 'types'

type initialStateType = {
  cartItemsCount: number
  cartItems: CartItemType[]
  cartTotal: number
}

const initialState: initialStateType = {
  cartItemsCount: 0,
  cartItems: [],
  cartTotal: 0,
}

const cartReducer = (state = initialState, action: CartActionsTypes) => {
  switch (action.type) {
    case CART_REMOVE_ITEM_SUCCEED:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.productID !== action.payload //payload == ID
        ),
      }
    case CART_REMOVE_ITEM_FAILED:
      return {
        ...state,
      }
    case CART_TOTAL_SUCCEED:
      let total = 0
      state.cartItems.forEach((item) => (total += item.itemTotal))
      return {
        ...state,
        cartTotal: total,
      }
    case CART_TOTAL_FAILED:
      return {
        ...state,
      }
    case UPDATE_CART_SUCCEED:
      return {
        //Co se stane v returnu tak se vrátí na FE a updateuje ho! Statej měnít v returnu a utility funkce atp dělat mimo
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.productID === action.productID
            ? {
                ...item,
                quantity: action.quantity,
                itemTotal: action.quantity * item.price,
              }
            : item
        ),
      }

    case UPDATE_CART_FAILED:
      return {
        ...state,
      }
    case ADD_TO_CART_SUCCEED:
      const newCartItem = action.payload

      const cartItem: CartItemType = {
        productID: newCartItem._id,
        imageUrl: newCartItem.Images.formats.small.url,
        title: newCartItem.Title,
        price: newCartItem.Price,
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
    case CART_ITEMS_COUNT_SUCCEED:
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
