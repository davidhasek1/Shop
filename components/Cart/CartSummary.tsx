import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { getCartTotal } from 'sagaStore/selectors'

const CartSummary = () => {
  const router = useRouter()
  const totalPrice = useSelector(getCartTotal)

  return (
    <Summary>
      <TotalPriceWrapper>
        <SubTotalLabel>subtotal</SubTotalLabel>
        <SubTotalValue>{totalPrice} Kč</SubTotalValue>{' '}
      </TotalPriceWrapper>
      <div>Shipping & taxes calculated at checkout</div>

      <CheckoutButtonWrapper>
        <CheckoutButton onClick={() => router.push('/checkout')}>
          Checkout
        </CheckoutButton>{' '}
        {/* TODO:  pushni usera na checkout page */}
      </CheckoutButtonWrapper>
    </Summary>
  )
}

const Summary = styled.div`
  border-top: 1px solid ${(props) => props.theme.fade2};
  padding: 20px;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  ${breakpoints('margin', '', [{ L: '15px' }])}
  ${breakpoints('align-items', '', [{ L: 'center' }])}
`

const TotalPriceWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`

const SubTotalLabel = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  align-items: flex-end;
  margin-right: 15px;
  padding-bottom: 2px;
`
const SubTotalValue = styled.div`
  font-size: 22px;
  font-weight: 600;
`
const CheckoutButtonWrapper = styled.div`
  margin: 15px 0;
`
const CheckoutButton = styled.button`
  padding: 12px 40px;
  background-color: ${(props) => props.theme.pink};
  &:hover {
    outline: none;
    background-color: ${(props) => `${props.theme.pink}`};
    color: ${(props) => props.theme.white};
  }
`
export default CartSummary
