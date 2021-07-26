import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import DesktopImage from './DesktopHeaderImage'
import MobileImage from './MobileHeaderImage'
import MainTitle from './MainTitle'

const Header = (props: {
  title?: string
  headerImage: any
  ownHeight?: number | string
  isHomePage: boolean
}) => {
  console.log(props.ownHeight)
  return (
    <HeaderContainer setHeight={props.ownHeight}>
      <ImageWrapper>
        <DesktopImage image={props.headerImage} />
        <MobileImage image={props.headerImage} />
        <MainTitle isHomePage={props.isHomePage} headerTitle={props.title} />
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
  ${breakpoints('height', '', [{ XL: '100%' }])};
`
const ImageWrapper = styled.div`
  font-size: 0;
`
export default Header
