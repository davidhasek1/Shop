import Image from "next/image";
import styled from "styled-components";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Link from "next/link";

const HeaderContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
`;
const HeaderContent = styled.div`
  width: 50%;
  padding: 50px 20px;
`;
const Paragraph = styled.p`
  text-align: left;
`;

const ButtonWrapper = styled.div`
  ${StyledIconBase} {
    color: #6648cd;
  }
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/images/product.jpg" width={600} height={310} />

      <HeaderContent>
        <div>
          <h1>Title of mew suprt product feffefe!</h1>
          <Paragraph>
            fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw
            fíwájw fijwí íáfjw fíjw fíwájwfijwí íáfjw fíjw fíwájw fijwí íáfjw
            fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí
            íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájwfijwí íáfjw fíjw fíwájw
            fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw
            fíwájw fijwí íáfjw fíjw fíwájwfijwí íáfjw fíjw fíwájw fijwí íáfjw
            fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájw fijwí
            íáfjw fíjw fíwájw fijwí íáfjw fíjw fíwájwfijwí íáfjw fíjw fíwájw
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

export default Header;
