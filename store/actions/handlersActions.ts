import * as types from "../types";

export const openMobileMenu = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.OPEN_MOBILE_MENU,
    payload: isOpen
  })
}

export const openProductDetail = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.OPEN_PROD_DETAIL,
    payload: isOpen,
  });
};

export const openTermsDialog = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.OEPN_TERMS,
    payload: isOpen,
  });
};

export const openPrivacyDialog = (isOpen: boolean) => async (dispatch) => {
  dispatch({
    type: types.OPEN_PRIVACY,
    payload: isOpen,
  });
};
