import * as types from "../types"

const initialState = {
  isProductDetailOpen: true
}
export const handlersReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.OPEN_PROD_DETAIL:
      return {
        ...state,
        isProductDetailOpen: action.payload
      };
    default:
      return state;
  }
}