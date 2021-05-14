import { NextPage } from "next"
import Head from "next/head"
import Header from "components/Header"
import About from "components/AboutSection"
import Bestsellers from "components/Bestsellers"
import Gallery from "components/Gallery"

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About aboutContent={"CONTENT FROM CMS"} />

      {/* TODO: fetch z databaze - udělat collection top selling products / componenta Products slider */}
      <Bestsellers />
      <Gallery />
    </div>
  )
}

export default HomePage
