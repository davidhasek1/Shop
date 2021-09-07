import { CartPayload } from 'types'
export const CART_ITEMS_COUNT_REQUEST = 'CART_ITEMS_COUNT_REQUEST'
export const CART_ITEMS_COUNT_SUCCEEDED = 'CART_ITEMS_COUNT_SUCCEEDED'
export const CART_ITEMS_COUNT_FAILED = 'CART_ITEMS_COUNT_FAILED'

type CartItemsCountActionType = {
  type: typeof CART_ITEMS_COUNT_REQUEST
}

export const setCartItemsCount = (): CartItemsCountActionType => ({
  type: CART_ITEMS_COUNT_REQUEST,
})

type CartItemsCountActionSucceededType = {
  type: typeof CART_ITEMS_COUNT_SUCCEEDED
}

export const setCartItemsCountActionSucceeded =
  (): CartItemsCountActionSucceededType => ({
    type: CART_ITEMS_COUNT_SUCCEEDED,
  })

type CartItemsCountActionFailedType = {
  type: typeof CART_ITEMS_COUNT_FAILED
}

export const setCartItemsCountActionFailed =
  (): CartItemsCountActionFailedType => ({
    type: CART_ITEMS_COUNT_FAILED,
  })

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST'
export const ADD_TO_CART_SUCCEEDED = 'ADD_TO_CART_SUCCEEDED'
export const ADD_TO_CART_FAILED = 'ADD_TO_CART_FAILED'

type AddToCartActionType = {
  type: typeof ADD_TO_CART_REQUEST
  payload: CartPayload
  payloadQTY?: number
}

export const setAddToCart = (cartItem, quantity): AddToCartActionType => ({
  type: ADD_TO_CART_REQUEST,
  payload: cartItem,
  payloadQTY: quantity,
})

type AddToCartActionSucceededType = {
  type: typeof ADD_TO_CART_SUCCEEDED
  payload: CartPayload
  payloadQTY?: number
}

export const setAddToCartSucceeded = (
  productID,
  quantity
): AddToCartActionSucceededType => ({
  type: ADD_TO_CART_SUCCEEDED,
  payload: productID,
  payloadQTY: quantity,
})

type AddToCartActionFailed = {
  type: typeof ADD_TO_CART_FAILED
  payload: CartPayload
}

export const setAddToCartFailed = (payload): AddToCartActionFailed => ({
  type: ADD_TO_CART_FAILED,
  payload,
})

export const UPDATE_CART_REQUEST = 'UPDATE_CART_REQUEST'
export const UPDATE_CART_SUCCEESS = 'UPDATE_CART_SUCCEESS'
export const UPDATE_CART_FAILED = 'UPDATE_CART_FAILED'

type setUpdateCartType = {
  type: typeof UPDATE_CART_REQUEST
  productID: string
  quantity: number
}
export const setUpdateCart = (productID, quantity) => ({
  type: UPDATE_CART_REQUEST,
  productID,
  quantity,
})

type setUpdateCartSuccessType = {
  type: typeof UPDATE_CART_SUCCEESS
  productID: string
  quantity: number
}
export const setUpdateCartSuccessed = (productID, quantity) => ({
  type: UPDATE_CART_SUCCEESS,
  productID,
  quantity,
})

type setUpdateCartFailedType = {
  type: typeof UPDATE_CART_FAILED
}
export const setUpdateCartFailed = () => ({
  type: UPDATE_CART_FAILED,
})

export type CartActionsTypes =
  | CartItemsCountActionType
  | CartItemsCountActionSucceededType
  | CartItemsCountActionFailedType
  | AddToCartActionType
  | AddToCartActionSucceededType
  | AddToCartActionFailed
  | setUpdateCartType
  | setUpdateCartSuccessType
  | setUpdateCartFailedType
