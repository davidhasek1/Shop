import { CartPayload } from 'types'
export const CART_ITEMS_COUNT_REQUEST = 'CART_ITEMS_COUNT_REQUEST'
export const CART_ITEMS_COUNT_SUCCEED = 'CART_ITEMS_COUNT_SUCCEED'
export const CART_ITEMS_COUNT_FAILED = 'CART_ITEMS_COUNT_FAILED'

type CartItemsCountActionType = {
  type: typeof CART_ITEMS_COUNT_REQUEST
}

export const setCartItemsCount = (): CartItemsCountActionType => ({
  type: CART_ITEMS_COUNT_REQUEST,
})

type CartItemsCountActionSucceedType = {
  type: typeof CART_ITEMS_COUNT_SUCCEED
}

export const setCartItemsCountActionSucceed = (): CartItemsCountActionSucceedType => ({
  type: CART_ITEMS_COUNT_SUCCEED,
})

type CartItemsCountActionFailedType = {
  type: typeof CART_ITEMS_COUNT_FAILED
}

export const setCartItemsCountActionFailed =
  (): CartItemsCountActionFailedType => ({
    type: CART_ITEMS_COUNT_FAILED,
  })

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST'
export const ADD_TO_CART_SUCCEED = 'ADD_TO_CART_SUCCEED'
export const ADD_TO_CART_FAILED = 'ADD_TO_CART_FAILED'

type AddToCartActionType = {
  type: typeof ADD_TO_CART_REQUEST
  payload: CartPayload
  payloadQTY?: number
}

export const setAddToCart = (cartItem): AddToCartActionType => ({
  type: ADD_TO_CART_REQUEST,
  payload: cartItem,
})

type AddToCartActionSucceedType = {
  type: typeof ADD_TO_CART_SUCCEED
  payload: CartPayload
}

export const setAddToCartSucceed = (
  productID
): AddToCartActionSucceedType => ({
  type: ADD_TO_CART_SUCCEED,
  payload: productID,
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
export const UPDATE_CART_SUCCEED = 'UPDATE_CART_SUCCEED'
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
  type: typeof UPDATE_CART_SUCCEED
  productID: string
  quantity: number
}
export const setUpdateCartSuccessed = (productID, quantity) => ({
  type: UPDATE_CART_SUCCEED,
  productID,
  quantity,
})

type setUpdateCartFailedType = {
  type: typeof UPDATE_CART_FAILED
}
export const setUpdateCartFailed = () => ({
  type: UPDATE_CART_FAILED,
})

export const CART_TOTAL_REQUEST = 'CART_TOTAL_REQUEST'
export const CART_TOTAL_SUCCEED = 'CART_TOTAL_SUCCEED'
export const CART_TOTAL_FAILED = 'CART_TOTAL_FAILED'

type setCartTotalType = {
  type: typeof CART_TOTAL_REQUEST
}

export const setCartTotal = (): setCartTotalType => ({
  type: CART_TOTAL_REQUEST,
})
type setCartTotalSucceedType = {
  type: typeof CART_TOTAL_SUCCEED
}

export const setCartTotalSucceed = (): setCartTotalSucceedType => ({
  type: CART_TOTAL_SUCCEED,
})

type setCartTotalFailedType = {
  type: typeof CART_TOTAL_FAILED
}

export const setCartTotalFailed = (): setCartTotalFailedType => ({
  type: CART_TOTAL_FAILED,
})

export type CartActionsTypes =
  | CartItemsCountActionType
  | CartItemsCountActionSucceedType
  | CartItemsCountActionFailedType
  | AddToCartActionType
  | AddToCartActionSucceedType
  | AddToCartActionFailed
  | setUpdateCartType
  | setUpdateCartSuccessType
  | setUpdateCartFailedType
  | setCartTotalType
  | setCartTotalSucceedType
  | setCartTotalFailedType
