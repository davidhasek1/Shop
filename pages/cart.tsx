import { NextPage } from "next";
import Head from "next/head";
import Order from "../components/CheckoutProcess/Cart";
import CustomerData from "../components/CheckoutProcess/CustomerData";
import Shipment from "../components/CheckoutProcess/Shipment";
import SendOrder from "../components/CheckoutProcess/SendOrder";
import Thankyou from "../components/CheckoutProcess/ThankYou";
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
