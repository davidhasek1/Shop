import * as types from "../types";

const initialState = {
  cartItems: [],
  itemsCount: 0,
};

export const userCartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const items = state.cartItems;
      items.push(action.payload);
      console.log(items);
      return {
        ...state,
        cartItems: items,
        itemsCount: state.itemsCount + 1, /* TODO */
      };

    default:
      return state;
  }
};
