import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Order from "../components/OrderProcess/Order";
import CustomerData from "../components/OrderProcess/CustomerData";
import Shipment from "../components/OrderProcess/Shipment";
import SendOrder from "../components/OrderProcess/SendOrder";
import Thankyou from "../components/OrderProcess/Thankyou";

import Footer from "../components/Footer";

const Cart: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>

      <Order />
      <CustomerData />
      <Shipment />
      <SendOrder />
      <Thankyou />
    </div>
  );
};

export default Cart;
