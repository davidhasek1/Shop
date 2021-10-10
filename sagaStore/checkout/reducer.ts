import {
  CHECKOUT_CUSTOMER_FORM_SUCCEED,
  CHECKOUT_CUSTOMER_FORM_FAILED,
  CheckoutFormTypes,
} from 'sagaStore/actions'

const initialState = {
  customer: {
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    zip: '',
    phone: '',
  },
}

const checkoutReducer = (state = initialState, action: CheckoutFormTypes) => {
  switch (action.type) {
    case CHECKOUT_CUSTOMER_FORM_SUCCEED: {
      console.log('REDUCER PAYLOAD', action.payload)

      //TODO: add logic + check saga types for data objects and so on
      return state
    }
    case CHECKOUT_CUSTOMER_FORM_FAILED: {
      return state
    }
    default: {
      return state
    }
  }
}

export default checkoutReducer
