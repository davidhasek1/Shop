import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import PageNavigation from "../components/PageNavigation";
import Header from "../components/Header";
import ContentItem from "../components/ContentItem";
import Footer from '../components/Footer'

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
`;
const ItemsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <PageNavigation />
      <Container>
        <Header />
        <ItemsWrapper>
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </ItemsWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
