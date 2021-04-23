import { NextPage } from "next";
import Head from "next/head";
import Order from "../components/OrderProcess/Order";
import CustomerData from "../components/OrderProcess/CustomerData";
import Shipment from "../components/OrderProcess/Shipment";
import SendOrder from "../components/OrderProcess/SendOrder";
import Thankyou from "../components/OrderProcess/Thankyou";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

const Cart: NextPage = () => {
  const cartItems = useSelector((state: RootStateOrAny) => state.userCart);
  console.log('[CART_ITEMS] ',cartItems)
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
