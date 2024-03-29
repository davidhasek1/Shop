import styled from 'styled-components'
import DesktopImage from './DesktopHeaderImage'
import MobileImage from './MobileHeaderImage'
import MainTitle from './MainTitle'

const HeaderContainer = styled.div<{ setHeight?: number }>`
  position: relative;
  background-color: ${(props) => props.theme.white};
  overflow: hidden; // !!!
  height: ${({ setHeight }) => (setHeight ? `${setHeight}px` : '100%')};
  ${(props) => props.theme.breakpoint.XL} {
    height: 100%;
  }
  ${(props) => props.theme.breakpoint.M} {
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  font-size: 0;
`

const Header = (props: {
  title?: string
  headerImage: any
  ownHeight?: number | boolean
  isHomePage: boolean

  children?: any
}) => {
  return (
    <HeaderContainer setHeight={props.ownHeight}>
      <ImageWrapper>
        <DesktopImage image={props.headerImage} />
        <MobileImage image={props.headerImage} />
        <MainTitle isHomePage={props.isHomePage} headerTitle={props.title}>
          {props.children}
        </MainTitle>
      </ImageWrapper>
    </HeaderContainer>
  )
}

export default Header
