import { url } from 'config'
import Head from 'next/head'
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
      <Header
        ownHeight
        headerImage={`${url}${content.Header.Image.url}`}
        headerTitle={content.Header.Title}
      />
      <About
        aboutTitle={content.About.Title}
        aboutContent={content.About.Content}
      />

      <Bestsellers />
      <Gallery title={content.Gallery.Title} images={content.Gallery} />
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const data = await fetch(`${url}/homepage`)
    const content = await data.json()
    return {
      props: { content },
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
