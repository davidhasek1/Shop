import * as types from "../types";

export const AddToCartState = (productID) => async (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: productID,
  });
};

export const IncrementCounter = () => async (dispatch) => {
  dispatch({
    type: types.INC_COUNTER,
  });
};
