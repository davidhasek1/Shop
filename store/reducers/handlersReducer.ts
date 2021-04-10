import * as types from "../types";
import { Handlers } from "../../types/types";

const initialState: Handlers = {
  isProductDetailOpen: false,
  isTermsOpen: false,
  isPrivacyOpen: false,
  isMobileMenuOpen: false,
};

export const handlersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.OPEN_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: action.payload
      };
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
    case types.OPEN_PRIVACY:
      return {
        ...state,
        isPrivacyOpen: action.payload,
      };
    default:
      return state;
  }
};
