import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../../components/Navigation";
import ShopNavigation from "../../components/PageNavigation";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import ShopItem from "../../components/Shop/ShopItem";
import ProductDetail from "../../components/Modal/ProductDetail";

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SHOP: Main page</title>
      </Head>
      <ProductDetail />
      <Navigation />
      <ShopNavigation />

      <Layout>
        <Grid>
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </Grid>
      </Layout>
      <Footer />
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  grid-gap: 30px;
  margin: 50px 0;
  ${breakpoints("grid-template-columns", "", [
    { 800: "auto auto" },
    { 600: "auto" },
  ])};
  ${breakpoints("margin", "", [{ 800: "50px 10px" }, { 600: "50px 10px" }])}
`;

export default Shop;
