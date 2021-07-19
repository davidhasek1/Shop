import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import DesktopImage from './DesktopHeaderImage'
import MobileImage from './MobileHeaderImage'
import MainTitle from './MainTitle'

const Header = ({ title, headerImage, ownHeight, isHomePage }) => {
  console.log(ownHeight)
  return (
    <HeaderContainer setHeight={ownHeight}>
      <ImageWrapper>
        <DesktopImage image={headerImage} />
        <MobileImage image={headerImage} />
        <MainTitle isHomePage={isHomePage} headerTitle={title} />
      </ImageWrapper>
    </HeaderContainer>
  )
}

type Props = {
  setHeight: any
}

const HeaderContainer = styled.div<Props>`
  position: relative;
  background-color: ${(props) => props.theme.white};
  overflow: hidden; // !!!
  height: ${({ setHeight }) => (setHeight ? `${setHeight}px` : '100%')};

  ${breakpoints('flex-direction', '', [{ M: 'column' }])};
`
const ImageWrapper = styled.div`
  font-size: 0;
`
export default Header
