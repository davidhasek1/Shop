import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Truck } from "@styled-icons/fa-solid/Truck";

const Shipment = () => {
  return (
    <ShipmentDataContainer>
      <Left>
        <Title>
          <Truck size={40} />
          &nbsp;Shipment
        </Title>
        <Price>1000,- Kč</Price>
      </Left>
      <Divider />
      <Right>
        <Form>
          <FormContent>
            <div>
              <Input type="checkbox" /> PPL
            </div>
            <div>
              <Input type="checkbox" /> Česká pošta
            </div>
            <div>
              <Input type="checkbox" /> Zásilkovna
            </div>
          </FormContent>
          CAll na API PPL Zasilkovny a pošty
          <ButtonWrapper>
            <Button>Back</Button>
            <Button>Continue</Button>
          </ButtonWrapper>
        </Form>
      </Right>
    </ShipmentDataContainer>
  );
};

const ShipmentDataContainer = styled.div`
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
const Form = styled.form`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FormContent = styled.div`
  text-align: left;
  display: flex;
`;
const Input = styled.input``;
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

export default Shipment;
