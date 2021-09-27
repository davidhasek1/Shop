import styled from 'styled-components'
import { getCartTotal } from 'sagaStore/selectors'
import { useSelector } from 'react-redux'

const CartSummaryIndicator = ({}) => {
  const cartTotalPrice = useSelector(getCartTotal)
  return (
    <Wrapper>
      <PriceSummary>({cartTotalPrice} Kč)</PriceSummary>
      <Dot />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Dot = styled.div`
  position: absolute;
  top: -12px;
  right: -32px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.black};
  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.L} {
    display: none;
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
