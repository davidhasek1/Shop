import styled from 'styled-components'

import { url } from 'config'
import Head from 'next/head'

import { mocked_blogposts } from 'MOCK'

import Header from 'components/Header'
import OurCollection from 'components/OurCollection'
import Banners from 'components/Banners'
import Blog from 'components/BlogSection'

const Wrapper = styled.div`
  padding: 100px 150px;
  ${(props) => props.theme.breakpoint.L} {
    padding: 100px;
  }
  ${(props) => props.theme.breakpoint.M} {
    padding: 0 15px;
  }
`
const Title = styled.h1`
  color: ${(props) => props.theme.pink};
  ${(props) => props.theme.breakpoint.L} {
    font-weight: 500;
    color: ${(props) => props.theme.black};
  }
`

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

export default HomePage
