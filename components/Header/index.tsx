import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'

import DesktopImage from './DesktopHeaderImage'
import MobileImage from './MobileHeaderImage'

const Header = ({ headerTitle, headerImage, ownHeight }) => {
  console.log(ownHeight)
  return (
    <HeaderContainer setHeight={ownHeight}>
      <ImageWrapper>
        <DesktopImage image={headerImage} />
        <MobileImage image={headerImage} />

        <TitleWrapper>
          <Title>{headerTitle}</Title>
        </TitleWrapper>
      </ImageWrapper>
    </HeaderContainer>
  )
}

type Props = {
  setHeight: any
}

const HeaderContainer = styled.div<Props>`
  position: relative;
  margin-top: 25px;
  background-color: ${(props) => props.theme.white};
  border-radius: 15px;
  overflow: hidden;
  height: ${({ setHeight }) => (setHeight ? `${setHeight}px` : '100%')};

  ${breakpoints('flex-direction', '', [{ M: 'column' }])};
  ${breakpoints('border-radius', '', [{ M: 0 }])};
  ${breakpoints('margin', '', [{ L: '20px' }, { M: 0 }])};
`
const ImageWrapper = styled.div`
  font-size: 0;
`
const TitleWrapper = styled.div`
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${breakpoints('width', '', [{ L: '90%' }])}
`
const Title = styled.h1`
  text-shadow: 0px 0px 2px ${(props) => props.theme.black};

  ${breakpoints('font-size', '', [{ L: '40px' }, { M: '25px' }])}
`
export default Header
