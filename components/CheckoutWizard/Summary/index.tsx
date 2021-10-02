import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

import SummaryTotals from './Summary_Totals'
import SummaryItems from './Summary_Items'
import SummaryCoupon from './Summary_Coupon'

const Summary = (props: { onToggle?: any }) => {
  return (
    <AnimateHeight height={props.onToggle ? 'auto' : 0}>
      <SummaryWrapper>
        <SummaryItems />
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
