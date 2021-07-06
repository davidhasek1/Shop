import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import TextInput from "components/UI/TextInput";

const IndiviudalCustomerData = (props) => {
  return (
    <FormData>
      <TextInput inputType={"email"} placeholderValue={"E-mail"} />
      <TextInput inputType={"number"} placeholderValue={"Telefon"} />
      <TextInput inputType={"text"} placeholderValue={"Jméno"} />
      <TextInput inputType={"text"} placeholderValue={"Příjmení"} />
      <TextInput inputType={"text"} placeholderValue={"Ulice"} />
      <TextInput inputType={"number"} placeholderValue={"PSČ"} />
      <TextInput inputType={"text"} placeholderValue={"Město"} />
      <Select>
        <option>Země</option>
        <option>CZ</option>
        <option>SK</option>
      </Select>
    </FormData>
  );
};

const FormData = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 90%;
  margin: auto;
  ${breakpoints("width", "", [{ M: "100%" }])}
`;
const Select = styled.select`
  width: 90%;
  padding: 15px;
  margin: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export default IndiviudalCustomerData;
