import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { User, Message } from "@styled-icons/boxicons-regular";
import { AlternateEmail } from "@styled-icons/material-sharp/AlternateEmail";

const Container = styled.div`
  display: flex;
`;
const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items center;

`;
const Map = styled.iframe`
  width: 50%;
  height: 80vh;
  border: none;
  filter: grayscale(100%);
`;
const Content = styled.div`
  width: 60%;
  min-width: 200px;
`;

const Title = styled.h1`
  margin-top: 0;
`;
const Form = styled.form`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const StyledInput = styled.input`
  margin: 10px 0;
  padding: 15px 10px;
  border-radius: 5px;
  border: none;
  outline: none;
`;
const StyledTextarea = styled.textarea`
  margin: 10px 0;
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
  background-color: #ffbac9;
  padding: 15px 0;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  color: #ffffff;
`;

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Conatct Page</title>
      </Head>
      <Navigation />
      <Container>
        <FormWrapper>
          <Content>
            <Title>
              Send
              <br />
              Feedback
            </Title>
            <span>Your opinion is important for us!</span>
            <Form>
              <User size={25} /> <StyledInput type="text" placeholder="Name" />
              <AlternateEmail size={25} />
              <StyledInput type="email" placeholder="E-mail" />
              <Message size={25} />
              <StyledTextarea placeholder="Message"></StyledTextarea>
              <FormButton type="submit">Send</FormButton>
            </Form>
          </Content>
        </FormWrapper>

        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.616824924917!2d12.744766315723895!3d50.243062979447245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0972740d67709%3A0xc8932e16a11d801f!2zUGF2bGEgRmFya2HFoW92w6EgU2NoYXVlcm92w6E!5e0!3m2!1scs!2scz!4v1615127734489!5m2!1scs!2scz"
          loading="lazy"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
