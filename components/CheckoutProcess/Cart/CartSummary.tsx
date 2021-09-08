import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { getCartTotal } from 'sagaStore/selectors'
import { useSelector } from 'react-redux'

const CartSummary = () => {
  const totalPrice = useSelector(getCartTotal)
  return (
    <Summary>
      <TotalPriceWrapper>
        <SubTotalLabel>subtotal</SubTotalLabel>
        <SubTotalValue>{totalPrice} Kč</SubTotalValue>{' '}
        {/* TODO: Sečíst položky košíku POZOR může jich být více pro jeden produkt => 1. vynásobit cenu počtem a pak provést spučrt */}
      </TotalPriceWrapper>
      <div>Shipping & taxes calculated at checkout</div>

      <CheckoutButtonWrapper>
        <CheckoutButton>Checkout</CheckoutButton>{' '}
        {/* TODO: Po kliku ulož košík do statu + pushni usera na checkout page */}
      </CheckoutButtonWrapper>
    </Summary>
  )
}

const Summary = styled.div`
  border-top: 1px solid ${(props) => props.theme.fade2};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
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
