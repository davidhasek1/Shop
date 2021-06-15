import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'

const Copyright = ({ copyright }) => {
  return (
    <CopyrightWrapper>
      <span>{copyright}</span>
      <span>Made with &hearts; by Hasan</span>
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  ${breakpoints('order', '', [{ 800: 1 }])}
  ${breakpoints('flex-direction', '', [{ 600: 'column' }])}
  ${breakpoints('padding', '', [{ 800: '20px 0' }])}
`

export default Copyright
