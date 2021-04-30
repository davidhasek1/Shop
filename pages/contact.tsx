import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import { User, Message } from "@styled-icons/boxicons-regular";
import { AlternateEmail } from "@styled-icons/material-sharp/AlternateEmail";
import MapCircle from "components/MapPin";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Conatct Page</title>
      </Head>
      <Container>
        <FormWrapper>
          <Content>
            <Title>
              Send<br />Feedback
            </Title>
            <span>Your opinion is important for us!</span>
            <Form>
              <InputWrapper>
                <User size={25} />{" "}
                <StyledInput type="text" placeholder="Name" />
              </InputWrapper>
              <InputWrapper>
                <AlternateEmail size={25} />
                <StyledInput type="email" placeholder="E-mail" />
              </InputWrapper>
              <InputWrapper>
                <Message size={25} />
                <StyledTextarea placeholder="Message"></StyledTextarea>
              </InputWrapper>
              <FormButton type="submit">Send</FormButton>
            </Form>
          </Content>
        </FormWrapper>
        <MapWrapper>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.616824924917!2d12.744766315723895!3d50.243062979447245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0972740d67709%3A0xc8932e16a11d801f!2zUGF2bGEgRmFya2HFoW92w6EgU2NoYXVlcm92w6E!5e0!3m2!1scs!2scz!4v1615127734489!5m2!1scs!2scz"
            loading="lazy"
          />
          <MapCircle />
        </MapWrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  ${breakpoints("flex-direction", "", [{ 800: "column" }])}
`;
const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  ${breakpoints("width", "", [{ 800: "100%" }])}
`;
const MapWrapper = styled.div`
  position: relative;
  width: 50%;
  ${breakpoints("width", "", [{ 800: "100%" }])}
`;
const Map = styled.iframe`
  display: block; /* iframe je defaultne inline !! */
  width: 100%;
  height: 90vh;
  border: none;
  filter: grayscale(100%);
  ${breakpoints("height", "", [{ 800: "50vh" }])}
`;
const Content = styled.div`
  width: 60%;
  min-width: 200px;
  ${breakpoints("width", "", [{ 600: "90%" }])}
  ${breakpoints("margin", "", [{ 800: "25px 0" }])}
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 35px;
  font-weight: 400;
`;
const Form = styled.form`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 10px;
  padding-left: 5px;
  border-radius: 5px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  margin-left: 5px;
  padding-left: 10px;
  padding-top: 5px;
  height: 150px;
  resize: vertical;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: Popins, sans-serif;
`;
const FormButton = styled.button`
  background-color: ${(props) => props.theme.pink};
  padding: 15px 0;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  color: ${(props) => props.theme.white};
`;

export default Contact;
