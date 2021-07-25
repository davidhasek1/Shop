import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'

const Heading = ({ children }) => {
  return (
    <Wrapper>
      <h2>{children}</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 20px;
`
export default Heading
