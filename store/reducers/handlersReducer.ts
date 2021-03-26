import * as types from "../types";
import { Handlers } from "../../types/types";
const initialState: Handlers = {
  isProductDetailOpen: true,
};
export const handlersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_PROD_DETAIL:
      return {
        ...state,
        isProductDetailOpen: action.payload,
      };
    default:
      return state;
  }
};
