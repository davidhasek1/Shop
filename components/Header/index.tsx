import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { NAVBAR_HEIGHT } from 'components/Navigation'

import DesktopImage from './DesktopHeaderImage'
import MobileImage from './MobileHeaderImage'
import MainTitle from './MainTitle'

const Header = ({ title, headerImage, ownHeight }) => {
  console.log(ownHeight)
  return (
    <HeaderContainer setHeight={ownHeight}>
      <ImageWrapper>
        <DesktopImage image={headerImage} />
        <MobileImage image={headerImage} />
        <MainTitle headerTitle={title} />
      </ImageWrapper>
    </HeaderContainer>
  )
}

type Props = {
  setHeight: any
}

const HeaderContainer = styled.div<Props>`
  position: relative;
  top: ${NAVBAR_HEIGHT};
  background-color: ${(props) => props.theme.white};
  height: ${({ setHeight }) => (setHeight ? `${setHeight}px` : '100%')};

  ${breakpoints('flex-direction', '', [{ M: 'column' }])};
  ${breakpoints('border-radius', '', [{ M: 0 }])};
`
const ImageWrapper = styled.div`
  font-size: 0;
`
export default Header
