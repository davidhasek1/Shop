import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import StyledImage from "components/Image"

const Header = () => {
  return (
    <HeaderContainer>
      <ImageWrapper>
        <StyledImage
          imageSrc={"/images/headerImg.jpg"}
          imageWidth={2500}
          imageHeight={1050}
          scaleing={false}
          fitting={"cover"}
        />
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
const TitleWrapper = styled.div`
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Title = styled.h1`
  text-shadow: 0px 0px 2px ${(props) => props.theme.black};
`
export default Header
