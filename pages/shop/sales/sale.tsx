import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { breakpoints } from "../../../utils/responsivity";
import ShopItem from "../../../components/ShopItem";

const ShopCategoryPage: NextPage = (props) => {
  const { saleProducts } = props;

  return (
    <div>
      <Head>
        <title>Dynamic page </title>
      </Head>

      <Grid>
        {saleProducts.map((saleProduct) => (
          <ShopItem
            detailID={"placeholderID"}
            title={saleProduct.title}
            description={saleProduct.description}
          />
        ))}
      </Grid>
    </div>
  );
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/api/shop/sale");
  const data = await res.json();

  return {
    props: {
      saleProducts: data,
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
