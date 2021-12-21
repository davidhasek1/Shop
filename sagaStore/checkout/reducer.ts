import {
  CHECKOUT_CUSTOMER_FORM_SUCCEED,
  CHECKOUT_CUSTOMER_FORM_FAILED,
  CheckoutFormTypes,
} from 'sagaStore/actions'

import { CustomerStateType } from 'types'

const initialState: CustomerStateType = {
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

      return {
        ...state,
        customer: {
          email: action.payload.email,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          address: action.payload.address,
          apartment: action.payload.apartment,
          city: action.payload.city,
          country: action.payload.country,
          zip: action.payload.zip,
          phone: action.payload.phone,
        },
      }
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
