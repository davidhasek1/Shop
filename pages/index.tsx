import { url } from 'config'
import Head from 'next/head'
import Header from 'components/Header'
import OurCollection from 'components/OurCollection'
import Gallery from 'components/Gallery'

const HomePage = ({ content, products }) => {
  console.log('PRODUCTS', products)
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        isHomePage={true}
        ownHeight
        headerImage={`${url}${content.Header.Image.url}`}
        title={content.Header.Title}
      />

      <OurCollection products={products} />
      <Gallery title={content.Gallery.Title} images={content.Gallery} />
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const homepage = await fetch(`${url}/homepage`)
    const productsApi = await fetch(`${url}/products`)
    const content = await homepage.json()
    const products = await productsApi.json()
    return {
      props: { content, products },
      revalidate: 10,
    }
  } catch (error) {
    console.log('[FETCH ERROR: Homepage]', error)
    return {
      props: {},
    }
  }
}
export default HomePage
