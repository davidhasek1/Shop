export type InputType = {
  type: string
  placeholder?: string
  value: any
  onChange: (e) => void
  text?: string
  name: string
  isName?: boolean
  isSurename?: boolean
  isCheckbox?: boolean
}

export type CustomerStateType = {
  customer: {
    email: string
    firstname: string
    lastname: string
    address: string
    apartment: string
    city: string
    country: string
    zip: string
    phone: string
  }
}
