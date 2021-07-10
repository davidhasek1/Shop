import { url } from 'config'
import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
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
            imageSource={`${url}${product.Images.formats.small.url}`}
            key={product._id}
            detailID={product._id}
            title={product.Title}
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
    return {
      props: {
        products: data,
        fallback: true,
      },
    }
  } catch (error) {
    console.log('[FETCH ERROR: Shop page - all products]', error)
    return {
      props: {
        products: {},
        fallback: true,
      },
    }
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  grid-gap: 30px;
  margin: 50px 0;

  ${breakpoints('grid-template-columns', '', [
    { L: 'auto auto' },
    { M: 'auto' },
  ])};
  ${breakpoints('margin', '', [{ L: '50px 10px' }, { M: '50px 10px' }])}
`

export default ShopMainPage
