import { NextPage } from "next";
import Head from "next/head";
import Order from "../components/Cart";
import CustomerData from "../components/CustomerData";
import Shipment from "../components/Shipment";
import SendOrder from "../components/SendOrder";
import Thankyou from "../components/ThankYou";
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
