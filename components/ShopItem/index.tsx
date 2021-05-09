import Image from "next/image";
import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { InfoCircle, ShoppingBag } from "@styled-icons/boxicons-regular";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openProductDetail } from "store/actions/handlersActions";
import { AddToCartState } from "store/actions/userCartActions";
import Button from "components/UI/Button";

const ShopItem = ({ title, description, detailID }) => {
  const dispatch = useDispatch();
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
          <Button
            onClick={() => router.push(`${router.route}/${detailID}`)}
            icon={<InfoCircle size={35} />}
          />
          <Button
            onClick={() => dispatch(AddToCartState(detailID))}
            icon={<ShoppingBag size={35} />}
          />
        </ItemActions>
      </Content>
    </Item>
  );
};

const Item = styled.div`
  max-width: 300px;
  min-width: 250px;
  background-color: ${(props) => props.theme.white};
  border-radius: 15px;
  overflow: hidden;
  text-align: left;
  margin: 0 15px;
  &:hover {
    box-shadow: 0 0 8px ${(props) => props.theme.pink};
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
    color: ${(props) => props.theme.pink};
  }
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export default ShopItem;
