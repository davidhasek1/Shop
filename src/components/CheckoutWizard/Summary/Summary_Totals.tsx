import styled from 'styled-components'
import { Separator } from '.'
import { useSelector } from 'react-redux'

import { getCartTotal } from 'sagaStore/selectors'

const Totals = styled.div``

const List = styled.ul`
  list-style: none;
  padding: 0;
`
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`
const Total = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const TotalPrice = styled(Total)``

const SummaryTotals = () => {
  const subtotal = useSelector(getCartTotal)
  return (
    <Totals>
      <List>
        <ListItem>
          <span>Subtotal</span> <span>{subtotal}Kč</span>
        </ListItem>
        <ListItem>
          <span>Shipping</span> <span>todo kč</span>
        </ListItem>
        <Separator />
        <ListItem>
          <Total>Total</Total> <TotalPrice>1000 kč</TotalPrice>
        </ListItem>
      </List>
    </Totals>
  )
}

export default SummaryTotals
