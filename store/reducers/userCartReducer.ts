import * as types from '../types'

const initialState = {
  cartItems: [],
  itemsCount: 0,
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

    default:
      return state
  }
}
