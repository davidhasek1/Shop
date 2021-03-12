import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

const SendOrderContainer = styled.div`
  padding: 80px 0;
  display: flex;
`;

const Left = styled.div`
  width: 30%;
`;
const Right = styled.div`
  width: 70%;
`;
const Title = styled.h1`
  ${StyledIconBase} {
    color: #ffbac9;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Price = styled.h3``;

const Divider = styled.div`
  border-left: 1px solid #ccc;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: auto;
  padding: 10px 0;
`;
const Button = styled.button`
  padding: 15px 20px;
  background-color: #ffbac9;
  outline: none;
  border: none;
  border-radius: 25px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

const SendOrder = () => {
  return (
    <SendOrderContainer>
      <Left>
        <Title>Total price:</Title>
        <Price>1000,- Kč</Price>
      </Left>
      <Divider />
      <Right>
        <ButtonWrapper>
          <Button>Finish</Button>
        </ButtonWrapper>
      </Right>
    </SendOrderContainer>
  );
};

export default SendOrder;