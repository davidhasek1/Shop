import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import Head from 'next/head'

import { getCartItems } from 'sagaStore/cart/selectors'

import OrderDetail from 'components/CheckoutProcess/Cart'
import CustomerData from 'components/CheckoutProcess/CustomerData'
import Shipment from 'components/CheckoutProcess/Shipment'
import OrderSummary from 'components/CheckoutProcess/OrderSummary'
import Thankyou from 'components/CheckoutProcess/ThankYou'

const Cart: NextPage = () => {
  const cartItems = useSelector(getCartItems)
  console.log('[CART_ITEMS] ', cartItems)
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <div style={{ padding: '50px 0' }}>
        <OrderDetail items={cartItems} />
      </div>
      {/*     <CustomerData />
      <Shipment />
      <OrderSummary />
      <Thankyou /> */}
    </div>
  )
}

export default Cart
