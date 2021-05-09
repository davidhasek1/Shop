import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import TextInput from "components/UI/TextInput";

const CompanyCustomerData = (props) => {
  const {} = props;
  return (
    <FormData>
      <TextInput inputType={"text"} placeholderValue={"Společnost"} />
      <TextInput inputType={"number"} placeholderValue={"IČO"} />
      <TextInput inputType={"number"} placeholderValue={"DIČ"} />
    </FormData>
  );
};

const FormData = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 90%;
  margin: auto;
  ${breakpoints("width", "", [{ 600: "100%" }])}
`;

export default CompanyCustomerData;
