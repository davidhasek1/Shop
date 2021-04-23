import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/images/product.jpg" width={600} height={310} />

      <HeaderContent>
        <div>
          <h1>Title of mew suprt product feffefe!</h1>
          <Paragraph>
            Aute id do consequat nulla exercitation do velit ipsum. Elit ex
            nulla cupidatat dolore elit. Irure ipsum excepteur quis ad culpa qui
            elit consectetur exercitation et non quis officia esse. Mollit
            fugiat officia laborum minim eiusmod. Incididunt id ullamco aute
            ullamco excepteur cillum laboris do officia nostrud sunt occaecat
            veniam eiusmod. Proident ea ullamco adipisicing nostrud consequat
            fugiat id ullamco.
          </Paragraph>
        </div>
        <ButtonWrapper>
          <Link href="/contact">
            <ArrowRightCircle size={50} />
          </Link>
        </ButtonWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  ${breakpoints("flex-direction", "", [{ 600: "column" }])}
  ${breakpoints("margin", "", [{ 800: "0px 20px" }])}
  ${breakpoints("margin-top", "", [{ 800: "80px" }])}
`;
const HeaderContent = styled.div`
  width: 50%;
  padding: 50px 20px;
  text-align: left;
  ${breakpoints("width", "", [{ 600: "100%" }])}
`;
const Paragraph = styled.p`
  text-align: left;
`;

const ButtonWrapper = styled.div`
  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
  }
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default Header;
