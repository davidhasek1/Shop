import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { BagFill } from '@styled-icons/bootstrap/BagFill'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { showCustomerData } from 'store/actions/userCartActions'

import CartItem from './CartItem'
import OrderSectionTitle from '../OrderSectionTitle'

const Cart = () => {
  const cartItems = useSelector(
    (state: RootStateOrAny) => state.userCart.cartItems
  )
  const customerForm = useSelector(
    (state: RootStateOrAny) => state.userCart.showCustomerData
  )
  const dispatch = useDispatch()
  console.log(cartItems)
  return (
    <OrderContainer>
      <OrderSectionTitle
        icon={<BagFill size={30} />}
        title={'Order'}
        price={'999'}
      />
      <Divider />
      <Right>
        <Items>
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item} testProp={item} />)
          ) : (
            <EmptyCart>No items in Cart</EmptyCart>
          )}
        </Items>
        <ButtonWrapper showCustomerData={customerForm}>
          <Button onClick={() => dispatch(showCustomerData(true))}>
            Continue
          </Button>
        </ButtonWrapper>
      </Right>
    </OrderContainer>
  )
}

type cartProps = {
  showCustomerData: boolean
}

const OrderContainer = styled.div`
  padding-top: 80px;
  display: flex;
  ${breakpoints('flex-direction', '', [{ L: 'column' }])}
`
const EmptyCart = styled.h1``

const Divider = styled.div`
  border-left: 1px solid #ccc;
`

const Right = styled.div`
  width: 70%;
  ${breakpoints('width', '', [{ L: '100%' }])}
`
const Items = styled.div``
const ButtonWrapper = styled.div<cartProps>`
  display: ${({ showCustomerData }) => (showCustomerData ? 'none' : 'flex')};
  justify-content: flex-end;
  width: 90%;
  margin: auto;
  padding: 10px 0;
`
const Button = styled.button``

export default Cart
