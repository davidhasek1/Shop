import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { breakpoints } from "utils/responsivity"

import Header from "components/Header"
import TopProductsSlider from "components/ProductsSlider"
import Gallery from "components/Gallery"

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* TODO: fetch z databaze - udělat collection top selling products / componenta Products slider */}
      <TopProductsSlider />

      <Gallery />
    </div>
  )
}

export default HomePage
