export const CHECKOUT_CUSTOMER_FORM_REQUEST = 'CHECKOUT_CUSTOMER_FORM_REQUEST'
export const CHECKOUT_CUSTOMER_FORM_SUCCEED = 'CHECKOUT_CUSTOMER_FORM_SUCCEED'
export const CHECKOUT_CUSTOMER_FORM_FAILED = 'CHECKOUT_CUSTOMER_FORM_FAILED'

type setCustomerFormType = {
  type: typeof CHECKOUT_CUSTOMER_FORM_REQUEST
  payload: any
}
type setCustomerFormSucceedType = {
  type: typeof CHECKOUT_CUSTOMER_FORM_SUCCEED
  payload: any
}
type setCustomerFormFailedType = {
  type: typeof CHECKOUT_CUSTOMER_FORM_FAILED
}

export const setCustomerForm = (formData): setCustomerFormType => {
  return {
    type: CHECKOUT_CUSTOMER_FORM_REQUEST,
    payload: formData,
  }
}

export const setCustomerFormSucceed = (
  formData
): setCustomerFormSucceedType => {
  return {
    type: CHECKOUT_CUSTOMER_FORM_SUCCEED,
    payload: formData,
  }
}

export const setCustomerFormFailed = (): setCustomerFormFailedType => ({
  type: CHECKOUT_CUSTOMER_FORM_FAILED,
})

export type CheckoutFormTypes =
  | setCustomerFormType
  | setCustomerFormSucceedType
  | setCustomerFormFailedType
