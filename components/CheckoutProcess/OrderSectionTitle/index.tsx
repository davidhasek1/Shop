import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { StyledIconBase } from "@styled-icons/styled-icon";

const OrderSectionTitle = (props) => {
  const { icon, title, price } = props;
  return (
    <Left>
      <Title>
        {icon}
        {/* <BagFill size={30} /> */}
        &nbsp;{title}
      </Title>
      <Price>{price},- Kč</Price>
    </Left>
  );
};

const Left = styled.div`
  width: 30%;
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
export default OrderSectionTitle;
