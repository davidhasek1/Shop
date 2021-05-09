import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import Image from "next/image";

import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <ImageWrapper>
          <Image src="/images/wellu.png" width={100} height={50} />
        </ImageWrapper>
        
        <FooterLinks />
        <SocialLinks />
        <Copyright />
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  padding: 30px 0;
  background-color: ${(props) => props.theme.white};
`;
const Content = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${breakpoints("padding", "", [{ 1200: "0 20px" }])}
  ${breakpoints("flex-direction", "", [{ 800: "column" }])}
`;
const ImageWrapper = styled.div`
  ${breakpoints("display", "", [{ 800: "none" }], "min-width")}
  ${breakpoints("padding-bottom", "", [{ 800: "15px" }])}
`;

export default Footer;
