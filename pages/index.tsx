import { NextPage } from "next"
import Head from "next/head"
import Header from "components/Header"
import About from "components/AboutSection"
import TopProductsSlider from "components/ProductsSlider"
import Gallery from "components/Gallery"

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header  />
      <About>
        Eiusmod qui ut aute ut exercitation sit elit id. Tempor duis ut ad
        exercitation incididunt velit eiusmod eiusmod cupidatat officia veniam
        pariatur fugiat officia. Fugiat minim exercitation laborum pariatur
        sunt. Quis irure enim commodo amet officia nostrud quis minim Lorem elit
        consequat nulla. Veniam ea qui ex dolore ut ea laboris ea. Eiusmod qui
        ut aute ut exercitation sit elit id. Tempor duis ut ad exercitation
        incididunt velit eiusmod eiusmod cupidatat officia veniam pariatur
        fugiat officia. Fugiat minim exercitation laborum pariatur sunt. Quis
        irure enim commodo amet officia nostrud quis minim Lorem elit consequat
        nulla. Veniam ea qui ex dolore ut ea laboris ea.
      </About>
      {/* TODO: fetch z databaze - udělat collection top selling products / componenta Products slider */}
      <TopProductsSlider />

      <Gallery />
    </div>
  )
}

export default HomePage
