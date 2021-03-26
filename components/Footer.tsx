import Link from "next/link";
import styled from "styled-components";
import { breakpoints } from "../utils/responsivity";
import Image from "next/image";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <ImageWrapper>
          <Image src="/images/wellu.png" width={100} height={50} />
        </ImageWrapper>
        <Links>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </Links>
        <Socials>
          <FacebookCircle size={30} />
          <Twitter size={30} />
          <Instagram size={30} />
        </Socials>
        <Copyright>
          <span>&copy; 2021 All rights reserved</span>
          <span>Handcraftet by David Hašek</span>
        </Copyright>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.section`
  padding: 30px 0;
  background-color: #ffffff;
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
const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  ${breakpoints("order", "", [{ 800: 1 }])}
  ${breakpoints("justify-content", "", [{ 800: "space-around" }])}
  ${breakpoints("flex-direction", "", [{ 600: "column" }])}
  ${breakpoints("padding", "", [{ 800: "20px 0" }])}
`;
const Socials = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${StyledIconBase} {
    color: #bfbfbf;
    margin: 0 15px;
    &:hover {
      color: #808080;
    };
  };
  ${breakpoints("padding", "", [{ 800: "20px 0" }])}
`;
const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  ${breakpoints("order", "", [{ 800: 1 }])}
  ${breakpoints("flex-direction", "", [{ 600: "column" }])}
  ${breakpoints("padding", "", [{ 800: "20px 0" }])}
`;

export default Footer;
