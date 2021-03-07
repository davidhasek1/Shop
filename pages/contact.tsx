import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
`;

const FormWrapper = styled.div`
  width: 50%;
`;
const Map = styled.iframe`
  width: 50%;
  height: 80vh ;
  border: none;
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
          <Layout>
            <form>
              <input type="text" />
              <input type="email" />
              <textarea></textarea>
              <button type="submit">Send</button>
            </form>
          </Layout>
        </FormWrapper>

        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163930.50326005483!2d14.325542135680347!3d50.05980577947033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraha!5e0!3m2!1scs!2scz!4v1615120544501!5m2!1scs!2scz"
          loading="lazy"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
