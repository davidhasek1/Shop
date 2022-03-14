import {
  LAYOUT_OPEN_MOBILE_MENU_SUCCEEDED,
  LAYOUT_CONFIRM_MODAL_SUCEED,
  LAYOUT_CONFIRM_MODAL_FAILED,
  LayoutActionsTypes,
} from 'sagaStore/layout/actions'

const initialState = {
  isProductDetailOpen: false,
  isMobileMenuOpen: false,
  isConfirmed: null,
}

const layoutReducer = (state = initialState, action: LayoutActionsTypes) => {
  switch (action.type) {
    case LAYOUT_CONFIRM_MODAL_SUCEED:
      return {
        ...state,
        isConfirmed: action.paylaod,
      }
    case LAYOUT_CONFIRM_MODAL_FAILED:
      return state
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
