import * as React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { User } from '@styled-icons/boxicons-solid/User'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'

import OrderSectionTitle from '../OrderSectionTitle'
import IndividualCustomerData from './IndividualCustomeData'
import CompanyCustomerData from './CompanyCustomerData'
import Button from 'components/UI/Button'
import { showCustomerData, showShipment } from 'store/actions/userCartActions'

const CustomerData = () => {
  const showCustomerForm = useSelector(
    (state: RootStateOrAny) => state.userCart.showCustomerData
  )
  const showShipmentForm = useSelector(
    (state: RootStateOrAny) => state.userCart.showShipment
  )
  const dispatch = useDispatch()

  const formHandler = (event) => {
    event.preventDefault()
    dispatch(showShipment(true))
  }
  return (
    <CustomerDataContainer showShipmentForm showCustomerForm={showCustomerForm}>
      <OrderSectionTitle
        icon={<User size={40} />}
        title={'Customer data'}
        price={'999'}
      />
      <Divider />
      <Right>
        <Form onSubmit={formHandler}>
          <IndividualCustomerData />
          <Separator />
          <CompanyCustomerData />
          <ButtonWrapper showShipmentForm={showShipmentForm} showCustomerForm>
            <Button
              buttonType="button"
              onClick={() => dispatch(showCustomerData(false))}
            >
              Back
            </Button>

            <Button>Continue</Button>
          </ButtonWrapper>
        </Form>
      </Right>
    </CustomerDataContainer>
  )
}
type CartProps = {
  showCustomerForm: boolean
  showShipmentForm: boolean
}

const CustomerDataContainer = styled.div<CartProps>`
  padding-top: 80px;
  display: ${({ showCustomerForm }) => (showCustomerForm ? 'flex' : 'none')};
  ${breakpoints('flex-direction', '', [{ 800: 'column' }])};
`
const Form = styled.form`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Separator = styled.div`
  height: 1px;
  width: 80%;
  border-bottom: 1px solid ${(props) => props.theme.pink};
`
const Right = styled.div`
  width: 70%;
  ${breakpoints('width', '', [{ 800: '100%' }])}
`
const Divider = styled.div`
  border-left: 1px solid #ccc;
`
const ButtonWrapper = styled.div<CartProps>`
  display: ${({ showShipmentForm }) => (showShipmentForm ? 'none' : 'flex')};
  justify-content: space-between;
  width: 90%;
  margin: auto;
  padding: 10px 0;
`

export default CustomerData
