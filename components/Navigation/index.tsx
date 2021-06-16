import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'

import NavigationLinks from './NavigationLinks'
import NavigationActions from './NavigationActions'

const Navigation = () => {
  return (
    <NavWrapper>
      <Container>
        <NavigationLinks />
        <NavigationActions />
      </Container>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  text-align: center;
  padding: 15px 0;
  background-color: ${(props) => props.theme.pink};
  box-shadow: 0px 4px 10px -6px ${(props) => props.theme.fade2};
`
const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
  
  ${breakpoints('padding', '', [{ 1200: '0 15px' }])}
`

export default Navigation
