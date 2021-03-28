import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../../components/Navigation";
import ShopNavigation from "../../components/PageNavigation";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import ShopItem from "../../components/Shop/ShopItem";

const ShopCategoryPage: NextPage = (props) => {
  const { favourites } = props;

  return (
    <div>
      <Head>
        <title>Dynamic page </title>
      </Head>
      <Navigation />
      <ShopNavigation />

      <Layout>
        <Grid>
          {favourites.map((favouriteProduct) => (
            <ShopItem
              title={favouriteProduct.title}
              description={favouriteProduct.description}
            />
          ))}
        </Grid>
      </Layout>
      <Footer />
    </div>
  );
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/api/shop/favourite-products");
  const data = await res.json();

  return {
    props: {
      favourites: data,
    },
  };
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

export default ShopCategoryPage;
