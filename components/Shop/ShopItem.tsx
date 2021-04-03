import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import { InfoCircle, ShoppingBag } from "@styled-icons/boxicons-regular";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openProductDetail } from "../../store/actions/handlersActions";

const ShopItem = ({ title, description, detailID }) => {
  const router = useRouter();
  return (
    <Item>
      <Image
        src="/images/product.jpg"
        width={500}
        height={375}
        layout="responsive"
      />
      <Content>
        <Title>{title}</Title>
        <Text>{description}</Text>

        <Price>
          <BoldPrice>1000 Kč</BoldPrice>
        </Price>
        <ItemActions>
          <ActionButton onClick={() => router.push(`${router.route}/${detailID}`)}>
            <InfoCircle size={35} />
          </ActionButton>
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
  &:hover {
    box-shadow: 0 0 8px #ffbac9;
  }
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
  cursor: pointer;
`;

export default ShopItem;
