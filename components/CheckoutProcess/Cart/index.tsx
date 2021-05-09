import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { BagFill } from "@styled-icons/bootstrap/BagFill";
import CartItem from "./CartItem";
import OrderSectionTitle from '../OrderSectionTitle'
import Button from "components/UI/Button";

const Cart = () => {
  return (
    <OrderContainer>
      <OrderSectionTitle
        icon={<BagFill size={30} />}
        title={"Order"}
        price={"999"}
      />
      <Divider />
      <Right>
        <Items>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Items>
        <ButtonWrapper>
          <Button onClick={() => console.log('continue...')}>Continue</Button>
        </ButtonWrapper>
      </Right>
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  padding-top: 80px;
  display: flex;
  ${breakpoints("flex-direction", "", [{ 800: "column" }])}
`;

const Divider = styled.div`
  border-left: 1px solid #ccc;
`;

const Right = styled.div`
  width: 70%;
  ${breakpoints("width", "", [{ 800: "100%" }])}
`;
const Items = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: auto;
  padding: 10px 0;
`;

export default Cart;
