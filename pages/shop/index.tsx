import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Head from "next/head"
import ShopItem from "components/ProductItem"

//tayd fetchuj všechny produkty

const ShopMainPage = (props) => {
  const { products } = props
  return (
    <div>
      <Head>
        <title>Main shop page</title>
      </Head>
      <Grid>
        {products.map((product) => {
          return (
            <ShopItem
              key={product._id}
              detailID={product._id}
              title={product.title}
              shortDescription={product.shortDescription}
            />
          )
        })}
      </Grid>
    </div>
  )
}
//budu chtít vypsat všechny produkty na stránce /shop

export const getStaticProps = async () => {
  const res = await fetch("http://0.0.0.0:3000/api/shop")
  const data = await res.json()
  console.log(data)
  return {
    props: {
      products: data ? data : [],
      fallback: false,
    },
  }
}

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
`

export default ShopMainPage
