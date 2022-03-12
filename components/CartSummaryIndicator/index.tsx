import styled from 'styled-components'
import { getCartTotal } from 'sagaStore/selectors'
import { useSelector } from 'react-redux'

const CartSummaryIndicator = ({}) => {
  const cartTotalPrice = useSelector(getCartTotal)
  console.log(cartTotalPrice)
  return (
    <Wrapper>
      <PriceSummary>({cartTotalPrice}Kč)</PriceSummary>
      {cartTotalPrice > 0 && <Dot />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  order: 1;
`
const Dot = styled.div`
  display: none;
  position: absolute;
  top: -12px;
  right: -3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.black};

  ${(props) => props.theme.breakpoint.L} {
    display: flex;
  }
  ${(props) => props.theme.breakpoint.M} {
    display: flex; //TODO: Check is it displays correctly
  }
`

const PriceSummary = styled.div`
  margin-left: 5px;
  ${(props) => props.theme.breakpoint.L} {
    display: none;
  }
`

export default CartSummaryIndicator
