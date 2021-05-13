import Image from "next/image"
import styled from "styled-components"
import { breakpoints } from "utils/responsivity"

const Header = () => {
  return (
    <HeaderContainer>
      <ImageWrapper>
        <ImageStyled src="/images/headerImg.jpg" width={2500} height={1050} />
        {/* width={3500} height={1550} */}
        <TitleWrapper>
          <Title>Martina Buckova e-shopík</Title>
        </TitleWrapper>
      </ImageWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  margin-top: 25px;

  background-color: ${(props) => props.theme.white};
  border-radius: 15px;
  overflow: hidden;
  ${breakpoints("flex-direction", "", [{ 600: "column" }])}
  ${breakpoints("margin", "", [{ 800: "20px" }])}
`
const ImageWrapper = styled.div`
  position: relative;
  font-size: 0;
`
const ImageStyled = styled(Image)`
  object-fit: cover;
  opacity: 0.7;
`
const TitleWrapper = styled.div`
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Title = styled.h1`
  text-shadow: 0px 0px 2px ${props => props.theme.black};
`
export default Header
