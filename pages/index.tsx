import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { breakpoints } from "utils/responsivity"

import Header from "components/Header"
import ContentItem from "components/HomePageItem"
import Gallery from "components/Gallery"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <ItemsWrapper>
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </ItemsWrapper>

      <Gallery />
    </div>
  )
}

const ItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  grid-gap: 30px;
  margin: auto;
  ${breakpoints("grid-template-columns", "", [
    { 800: "auto auto" },
    { 600: "auto" },
  ])}
  ${breakpoints("margin", "", [{ 800: "50px 20px" }])}
  ${breakpoints("justify-content", "", [{ 600: "center" }])}
`
export default Home
