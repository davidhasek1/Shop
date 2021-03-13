import Image from "next/image";
import styled from "styled-components";
import { InfoCircle, ShoppingBag } from "@styled-icons/boxicons-regular";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Link from "next/link";

const Item = styled.div`
  max-width: 500px;
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
`;
const Title = styled.h3`
  margin: 0;
  text-align: left;
  padding-left: 10px;
`;
const Content = styled.div`
  padding: 30px 0;
`;
const Price = styled.span``;

const ItemActions = styled.div`
  ${StyledIconBase} {
    color: #ffbac9;
  }
  display: flex;
  justify-content: space-around;
  padding: 10px 70px;
`;

const ActionButton = styled.button`
  background: transparent;
  padding: 0;
  outline: none;
  border: none;
`;

const ShopItem = () => {
  return (
    <Item>
      <Image src="/images/product.jpg" width={500} height={400} />
      <Content>
        <Title>Title of section whe you can find top products</Title>
        <p>
          oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw
          oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw
          oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw oufn íwfjf wífjw
          min-height: 500px;min-height: 500px;min-height: 500px;
        </p>

        <Price>
          <strong>1000,- Kč</strong>
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

export default ShopItem;
