import { NextPage } from 'next'
import { url } from 'config/next.config'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Header from 'components/Header'
import About from 'components/AboutSection'
import Bestsellers from 'components/Bestsellers'
import Gallery from 'components/Gallery'

const HomePage = ({ content }) => {
  console.log(content)
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About aboutContent={content.Body} />

      {/* TODO: fetch z databaze - udělat collection top selling products / componenta Products slider */}
      <Bestsellers />
      <Gallery />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(`${url}/about-well-u`)
  const content = await data.json()
  return {
    props: { content },
    revalidate: 10,
  }
}
export default HomePage
