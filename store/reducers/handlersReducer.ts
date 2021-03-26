import * as types from "../types";
import { Handlers } from "../../types/types";

const initialState: Handlers = {
  isProductDetailOpen: false,
  isTermsOpen: false,
};

export const handlersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.OPEN_PROD_DETAIL:
      return {
        ...state,
        isProductDetailOpen: action.payload,
      };
    case types.OEPN_TERMS:
      return {
        ...state,
        isTermsOpen: action.payload,
      };
    default:
      return state;
  }
};
