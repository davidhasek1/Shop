import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import PageNavigation from "../components/PageNavigation";
import Header from "../components/HomePage/Header";
import ContentItem from "../components/HomePage/ContentItem";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const ItemsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
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
