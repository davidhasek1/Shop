import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import CartNavigation from '../components/Cart/CartNavigation'
import Footer from "../components/Footer";

const Cart: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <Navigation />
      <CartNavigation />

        content here

      <Footer />
    </div>
  );
};

export default Cart;
