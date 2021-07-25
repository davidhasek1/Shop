import { url } from 'config'
import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import Head from 'next/head'

import GridLyout from 'components/Layout/GridLayout'
import ShopItem from 'components/ProductItem'
import Heading from 'components/Heading'

const ShopMainPage = ({ products }) => {
  const shopContent = products.map((product) => (
    <ShopItem
      imageSource={`${url}${product.Images.formats.small.url}`}
      key={product._id}
      detailID={product._id}
      title={product.Title}
    />
  ))
  return (
    <div>
      <Head>
        <title>All Products</title>
      </Head>
      <Heading>All Products</Heading>
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

export default ShopMainPage
