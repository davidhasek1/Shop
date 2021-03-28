import { NextPage } from "next";
import Head from "next/head";
import Navigation from "../../../components/Navigation";
import ShopNavigation from "../../../components/PageNavigation";
import Layout from "../../../components/Layout";
import Footer from "../../../components/Footer";
import styled from "styled-components";
import { breakpoints } from "../../../utils/responsivity";
import ShopItem from "../../../components/Shop/ShopItem"

const Shop = (props) => {
  return (
    <div>
      <Head>
        <title>{props.page.title}</title>
      </Head>
      <Navigation />
      <ShopNavigation />

      <Layout>
        <Grid>
          {props.page.map((item) => (
            <ShopItem title={item.title} description={item.body} />
          ))}
        </Grid>
      </Layout>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  //ješte fetch ids pro Endpoint kde jsou favoiurites , all a sale dynamicky
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const ids = data.map((page): any => {
    return {
      params: { categoryID: page.id.toString() },
    };
  });
  console.log(ids);
  return {
    paths: ids,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  //params určují stránku - params pošlu do url endpointu - vrátím data pro tu page
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.categoryID}` //toto je spis detail produktu
  );
  const data = await res.json();

  console.log(data);

  return {
    props: {
      page: [data]
    }
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

export default Shop;
