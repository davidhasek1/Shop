import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

import { useSelector } from 'react-redux'

import { getCartItems, getCartTotal } from 'sagaStore/selectors'
import SummaryTotals from './Summary_Totals'
import SummaryItems from './Summary_Items'
import SummaryCoupon from './Summary_Coupon'

const Summary = (props: { onToggle?: any }) => {
  const cartItems = useSelector(getCartItems)

  console.log('CHECKOUT CART ', cartItems)

  return (
    <AnimateHeight height={props.onToggle ? 'auto' : 0}>
      <SummaryWrapper>
        <SummaryItems itemsFromCart={cartItems} />
        <Separator />
        <SummaryCoupon />
        <Separator />
        <SummaryTotals />
      </SummaryWrapper>
    </AnimateHeight>
  )
}

const SummaryWrapper = styled.div`
  margin: 0 10px;

  ${(props) => props.theme.breakpoint.M} {
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid ${(props) => props.theme.pink};
  }
`

export const Separator = styled.div`
  border: none;
  border-top: 1px solid #dfdddd;
  margin: 1.5rem 0;
`

export default Summary
