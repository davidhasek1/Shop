import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const Quote = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 100px 150px;
  ${breakpoints('padding', '', [{ L: '100px' }, { M: '0 15px' }])}
`
const Title = styled.h1`
  color: ${(props) => props.theme.pink};
  ${breakpoints('font-weight', '', [{ L: 500 }])}
  ${breakpoints('color', '', [{ L: '#000' }])}
`

export default Quote
