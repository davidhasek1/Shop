import Link from "next/link";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";

const FooterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #ffffff;
`;
const Links = styled.div`
  width: 50%;
  display flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  padding: 0 50px;
`;
const Socials = styled(Links)``;

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #bfbfbf;
  }
  width: 30%;
  display: flex;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Links>
        <Link href="/terms">Terms &amp; Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/contact">Contact</Link>
      </Links>
      <Socials>
        <IconStyleWrapper>
          <FacebookCircle size={25} />
          <Twitter size={25} />
          <Instagram size={25} />
        </IconStyleWrapper>
        <span>&copy; 2021 All rights reserved</span>
      </Socials>
    </FooterContainer>
  );
};

export default Footer;
