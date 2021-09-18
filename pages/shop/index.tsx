import { url } from 'config'
import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import Head from 'next/head'

import GridLyout from 'components/Layout/GridLayout'
import ShopItem from 'components/ProductItem'

const ShopMainPage = ({ products }) => {
  const shopContent = products.map((product) => (
    <ShopItem
      key={product._id}
      detailID={product._id}
      imageSource={`${url}${product.Images.formats.small.url}`}
      title={product.Title}
      price={product.Price}
    />
  ))
  return (
    <div>
      <Head>
        <title>All Products</title>
      </Head>
      <WrapperTitle>
        <h2>All Products</h2>
      </WrapperTitle>
      <GridLyout content={shopContent} />
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

const WrapperTitle = styled.div`
  padding-top: 20px;
`

export default ShopMainPage
