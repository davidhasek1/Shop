import styled from 'styled-components'
import { url } from 'config'
import { breakpoints } from 'utils/responsivity'
import Head from 'next/head'
import ShopItem from 'components/ProductItem'

const ShopMainPage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>All Products</title>
      </Head>

      <Grid>
        {products.map((product) => (
          <ShopItem
            imageSource={`${url}${product.Images.url}`}
            key={product._id}
            detailID={product._id}
            title={product.Title}
            shortDescription={product.ShortDescription}
          />
        ))}
      </Grid>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${url}/products`)
    const data = await res.json()
    console.log(data)
    return { props: { products: data, fallback: true } }
  } catch (err) {
    console.log(err)
    return { props: { products: null, fallback: true } }
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  grid-gap: 30px;
  margin: 50px 0;
  ${breakpoints('grid-template-columns', '', [
    { 800: 'auto auto' },
    { 600: 'auto' },
  ])};
  ${breakpoints('margin', '', [{ 800: '50px 10px' }, { 600: '50px 10px' }])}
`

export default ShopMainPage
