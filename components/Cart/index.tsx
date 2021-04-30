import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import CartItem from "../CartItem";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { BagFill } from "@styled-icons/bootstrap/BagFill";

const Cart = () => {
  return (
    <OrderContainer>
      <Left>
        <Title>
          <BagFill size={30} />
          &nbsp;Order
        </Title>
        <Price>1000,- Kč</Price>
      </Left>
      <Divider />
      <Right>
        <Items>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Items>
        <ButtonWrapper>
          <Button>Continue</Button>
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
const Left = styled.div`
  width: 30%;
  ${breakpoints("width", "", [{ 800: "100%" }])}
`;
const Title = styled.h1`
  ${StyledIconBase} {
    color: ${props => props.theme.pink}
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Price = styled.h3``;
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
const Button = styled.button`
  padding: 15px 20px;
  background-color: ${(props) => props.theme.pink};
  outline: none;
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-weight: 600;
  cursor: pointer;
`;

export default Cart;
