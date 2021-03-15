import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Link from "next/link";

const ContentItem = () => {
  return (
    <Item>
      <Image src="/images/product.jpg" width={500} height={400} />
      <Title>Title of section whe you can find top products</Title>
      <ButtonWrapper>
        <Link href="/contact">
          <ArrowRightCircle size={40} />
        </Link>
      </ButtonWrapper>
    </Item>
  );
};

const Item = styled.div`
  max-width: 500px;
  min-width: 250px;
  margin: 15px;
  background-color: #ffffff;
  border-radius: 5px;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 30px 0;
  overflow: hidden;
  justify-content: center;
`;
const Title = styled.h3`
  text-align: left;
  padding: 20px 10px;
`;

const ButtonWrapper = styled.div`
  ${StyledIconBase} {
    color: #ffbac9;
  }
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export default ContentItem;
