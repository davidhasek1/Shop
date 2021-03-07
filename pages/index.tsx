import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/HomePage/Header";
import ContentItem from "../components/HomePage/ContentItem";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const ItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  grid-gap: 30px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Layout>
        <Header />
        <ItemsWrapper>
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </ItemsWrapper>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
