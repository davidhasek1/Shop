import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { User } from "@styled-icons/boxicons-solid/User";

const CustomerData = () => {
  return (
    <CustomerDataContainer>
      <Left>
        <Title>
          <User size={40} />
          &nbsp;Customer data
        </Title>
        <Price>1000,- Kč</Price>
      </Left>
      <Divider />
      <Right>
        <Form>
          <FormData>
            <Input type="email" placeholder="E-mail"></Input>
            <Input type="number" placeholder="Telefon"></Input>
            <Input type="text" placeholder="Jméno"></Input>
            <Input type="text" placeholder="Příjmení"></Input>
            <Input type="text" placeholder="Ulice"></Input>
            <Input type="number" placeholder="PSČ"></Input>
            <Input type="text" placeholder="Město"></Input>
            <Select>
              <option>Země</option>
              <option>CZ</option>
              <option>SK</option>
            </Select>
          </FormData>
          <Separator />
          <FormData>
            <Input type="text" placeholder="Společnost"></Input>
            <Input type="number" placeholder="IČO"></Input>
            <Input type="number" placeholder="DIČ"></Input>
          </FormData>
          <ButtonWrapper>
            <Button>Back</Button>
            <Button>Continue</Button>
          </ButtonWrapper>
        </Form>
      </Right>
    </CustomerDataContainer>
  );
};

const Form = styled.form`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FormData = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 90%;
  margin: auto;
  ${breakpoints("width", "", [{ 600: "100%" }])}
`;
const Input = styled.input`
  width: 90%;
  padding: 15px;
  margin: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;
const Select = styled.select`
  width: 90%;
  padding: 15px;
  margin: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;
const Separator = styled.div`
  height: 1px;
  width: 80%;
  border-bottom: 1px solid ${(props) => props.theme.pink};
`;
const CustomerDataContainer = styled.div`
  padding-top: 80px;
  display: flex;
  ${breakpoints("flex-direction", "", [{ 800: "column" }])}
`;

const Left = styled.div`
  width: 30%;
  ${breakpoints("width", "", [{ 800: "100%" }])}
`;
const Right = styled.div`
  width: 70%;
  ${breakpoints("width", "", [{ 800: "100%" }])}
`;
const Title = styled.h1`
  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
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
  justify-content: space-between;
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

export default CustomerData;
