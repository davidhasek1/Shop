import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import PageNavigation from "../components/PageNavigation";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import styled from "styled-components";
import ShopItem from "../components/Shop/ShopItem";
import ShopItemL from "../components/Shop/ShopItemL";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  grid-gap: 30px;
`;
const Col1 = styled.div``;

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SHOP: Main page</title>
      </Head>

      <Navigation />
      <PageNavigation />
      <Layout>
        <Grid>
          <Col1>
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
          </Col1>
          <Col1>
            <ShopItemL />
            <ShopItemL />
            <ShopItemL />
            <ShopItemL />
          </Col1>
          <Col1>
            <ShopItem />
            <ShopItem />
            <ShopItem />
            <ShopItem />
          </Col1>
        </Grid>
      </Layout>
      <Footer />
    </div>
  );
};

export default Shop;
