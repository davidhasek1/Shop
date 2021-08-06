import { LAYOUT_OPEN_MOBILE_MENU_SUCCEEDED,LayoutActionsTypes } from 'sagaStore/layout/actions'

const initialState = {
  isProductDetailOpen: false,
  isMobileMenuOpen: false,
}

const layoutReducer = (state = initialState, action: LayoutActionsTypes) => {
  switch (action.type) {
    case LAYOUT_OPEN_MOBILE_MENU_SUCCEEDED:
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      }

    default:
      return state
  }
}

export default layoutReducer
