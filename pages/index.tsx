import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buckova: Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Link href="/shop">Shop</Link>
        <Link href="/shop">Cart</Link>
      </Container>
    </div>
  );
};

export default Home;
