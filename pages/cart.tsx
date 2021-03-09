import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import CartNavigation from "../components/OrderProcess/CartNavigation";
import Order from "../components/OrderProcess/Order";
import CustomerData from "../components/OrderProcess/CustomerData";
import Shipment from "../components/OrderProcess/Shipment";
import SendOrder from "../components/OrderProcess/SendOrder";

import Footer from "../components/Footer";

const Cart: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <Navigation />
      <CartNavigation />
      <Layout>
        <Order />
        <CustomerData />
        <Shipment />
        <SendOrder />
      </Layout>
      <Footer />
    </div>
  );
};

export default Cart;
