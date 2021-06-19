import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import Link from 'next/link'

import NavigationLinks from './NavigationLinks'
import NavigationActions from './NavigationActions'
import StyledImage from 'components/Image'

const Navigation = () => {
  return (
    <NavWrapper>
      <Container>
        <NavigationLinks />
        <Link href="/" passHref>
          <ImageLink>
            <StyledImage
              imageSrc={'/images/wellu.png'}
              imageWidth={100}
              imageHeight={50}
              scaleing={false}
              fitting={'contain'}
              layout={'intrinsic'}
            />
          </ImageLink>
        </Link>
        <NavigationActions />
      </Container>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  text-align: center;
  padding: 0 10px;
  background-color: ${(props) => props.theme.pink};
  box-shadow: 0px 4px 10px -6px ${(props) => props.theme.fade2};
  color: ${(props) => props.theme.white};
  ${StyledIconBase} {
    margin: 5px;
  }

  ${breakpoints('padding', '', [{ 800: '15px 0' }])}
`
const Container = styled.div`
  max-width: 1350px;
  text-align: center;
  margin: auto;
  display: flex;

  ${breakpoints('padding', '', [{ 1200: '0 15px' }])}
`
const ImageLink = styled.a`
  font-size: 0;
  margin: 0 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${breakpoints('margin-left', '', [{ 1200: '0' }])}
`
export default Navigation
