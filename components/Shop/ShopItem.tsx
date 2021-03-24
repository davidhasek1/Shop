import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import { InfoCircle, ShoppingBag } from "@styled-icons/boxicons-regular";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Link from "next/link";

const ShopItem = () => {
  return (
    <Item>
      <Image src="/images/product.jpg" width={500} height={375} layout="responsive" />
      <Content>
        <Title>Title of section whe you can find top products</Title>
        <Text>
          oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw
        </Text>

        <Price>
          <BoldPrice>1000 Kč</BoldPrice>
        </Price>
        <ItemActions>
          <Link href="/">
            <InfoCircle size={35} />
          </Link>
          <ActionButton>
            <ShoppingBag size={35} />
          </ActionButton>
        </ItemActions>
      </Content>
    </Item>
  );
};

const Item = styled.div`
  max-width: 300px;
  min-width: 200px;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  text-align: left;
  margin: 0 15px;
`;
const Content = styled.div`
  padding: 10px;
`;
const Title = styled.h3`
  margin: 0;
  line-height: 24px;
`;
const Text = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;
const Price = styled.div`
  text-align: center;
`;
const BoldPrice = styled.strong`
  font-weight: 400;
`;

const ItemActions = styled.div`
  ${StyledIconBase} {
    color: #ffbac9;
  }
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

const ActionButton = styled.button`
  background: transparent;
  padding: 0;
  outline: none;
  border: none;
`;

export default ShopItem;
