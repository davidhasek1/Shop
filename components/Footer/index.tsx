import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import StyledImage from "components/Image"

import FooterLinks from "./FooterLinks"
import SocialLinks from "./SocialLinks"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <ImageWrapper>
          <StyledImage
            imageSrc={"/images/wellu.png"}
            imageWidth={200}
            imageHeight={100}
            scaleing={false}
            fitting={"contain"}
            layout={"intrinsic"}
          />
        </ImageWrapper>

        <FooterLinks />
        <SocialLinks />
        <Copyright />
      </Content>
    </FooterContainer>
  )
}

const FooterContainer = styled.section`
  padding: 30px 0;
  background-color: ${(props) => props.theme.white};
`
const Content = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${breakpoints("padding", "", [{ 1200: "0 20px" }])}
  ${breakpoints("flex-direction", "", [{ 800: "column" }])}
`
const ImageWrapper = styled.div`
  font-size: 0;
  margin-right: 5px;
  ${(breakpoints("display", "", [{ 800: "none" }]), "min-width")}
  ${breakpoints("padding-bottom", "", [{ 800: "15px" }])}
  ${breakpoints(" margin-right", "", [{ 800: 0 }])}
`

export default Footer
