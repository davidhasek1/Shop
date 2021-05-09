import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { User } from "@styled-icons/boxicons-solid/User";
import OrderSectionTitle from "../OrderSectionTitle";
import IndividualCustomerData from './IndividualCustomeData'
import CompanyCustomerData from './CompanyCustomerData'
import Button from 'components/UI/Button'

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
            <Button onClick={() => console.log("Add handle function")}>
              Back
            </Button>
            <Button onClick={() => console.log("Add handle function")}>
              Continue
            </Button>
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

export default CustomerData;
