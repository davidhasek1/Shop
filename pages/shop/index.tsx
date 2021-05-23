import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Head from "next/head"
import ShopItem from "components/ProductItem"

const ShopMainPage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>All Products</title>
      </Head>

      <Grid>
        {products.map((product) => (
          <ShopItem
            key={product._id}
            detailID={product._id}
            title={product.title}
            shortDescription={"description"}
          />
        ))}
      </Grid>
    </div>
  )
}
//fetch detailu produktů dané page

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch("http://0.0.0.0:3000/api/getAllProducts")
    const data = await res.json()
    console.log(data)
    return { props: { products: data, fallback: false } }
  } catch (err) {
    console.log(err)
    return { props: { products: null, fallback: false } }
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
