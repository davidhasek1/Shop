import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'
import Head from 'next/head'

import { mocked_blogposts } from 'MOCK'

import Header from 'components/Header'
import OurCollection from 'components/OurCollection'
import Banners from 'components/Banners'
import Blog from 'components/BlogSection'

const HomePage = ({ content, products }) => {
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

      <Wrapper>
        <Title>
          Natural, effective, sustainable—all in one. Why settle for anything
          less?
        </Title>
      </Wrapper>
      <Banners />
      <Blog isHomePage={true} blogContent={mocked_blogposts} />
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

const Wrapper = styled.div`
  padding: 100px 150px;
  ${breakpoints('padding', '', [{ L: '100px' }, { M: '0 15px' }])}
`
const Title = styled.h1`
  color: ${(props) => props.theme.pink};
  ${breakpoints('font-weight', '', [{ L: 500 }])}
  ${breakpoints('color', '', [{ L: '#000' }])}
`
export default HomePage
