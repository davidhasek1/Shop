import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
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
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')};
`

const PriceSummary = styled.div`
  margin-left: 5px;
  ${breakpoints('display', '', [{ L: 'none' }])};
`

export default CartSummaryIndicator
