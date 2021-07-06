import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'

const Copyright = ({ copyright }) => {
  return (
    <CopyrightWrapper>
      <Item>{copyright}</Item>
      <Item>Made with &hearts; by Hasan</Item>
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 12px;
  color: #808080;
  
  ${breakpoints('order', '', [{ L: 1 }])}
  ${breakpoints('flex-direction', '', [{ M: 'column' }])}
  ${breakpoints('padding', '', [{ L: '20px 0' }])}
`
const Item = styled.span`
  margin: 10px 0;
`

export default Copyright
