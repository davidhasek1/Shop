import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { User } from "@styled-icons/boxicons-solid/User";
import OrderSectionTitle from "../OrderSectionTitle";
import IndividualCustomerData from './IndividualCustomeData'
import CompanyCustomerData from './CompanyCustomerData'

const CustomerData = () => {
  return (
    <CustomerDataContainer>
      <OrderSectionTitle
        icon={<User size={40} />}
        title={"Customer data"}
        price={"999"}
      />
      <Divider />
      <Right>
        <Form>
          <IndividualCustomerData />
          <Separator />
         <CompanyCustomerData />
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
const Right = styled.div`
  width: 70%;
  ${breakpoints("width", "", [{ 800: "100%" }])}
`;
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
