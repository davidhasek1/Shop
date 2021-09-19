import { NextPage } from 'next'
import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { useSelector } from 'react-redux'
import { url } from 'config'
import Head from 'next/head'

import { CartItemType } from 'types'

import { getCartItems } from 'sagaStore/cart/selectors'

import CartItem from 'components/Cart/CartItem'
import CartSummary from 'components/Cart/CartSummary'

import CustomerData from 'components/CheckoutWizard/Informations'

const Cart: NextPage = () => {
  const cartItems = useSelector(getCartItems)
  console.log('CART ITEMS', cartItems)

  return (
    <Wrapper>
      <Head>
        <title>Cart</title>
      </Head>
      {cartItems && cartItems.length > 0 ? (
        <CartTitle>Your Cart</CartTitle>
      ) : (
        <CartTitleEmpty>Your Cart is Empty</CartTitleEmpty>
      )}
      {cartItems && cartItems.length > 0 && (
        <>
          <CartLabelsWrapper>
            <Labels>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </Labels>
          </CartLabelsWrapper>
          <div>
            {cartItems.map((item: CartItemType, idx: number) => (
              <CartItem
                key={item.productID}
                productId={item.productID}
                imgUrl={`${url}${item.imageUrl}`}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                itemTotal={item.itemTotal}
              />
            ))}
          </div>
          <CartSummary />
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`
const CartTitle = styled.h1`
  text-align: left;
  ${breakpoints('text-align', '', [{ L: 'center' }])}
`
const CartTitleEmpty = styled.h1`
  text-align: center;
`

const CartLabelsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  ${breakpoints('justify-content', '', [{ L: 'center' }])}
`
const Labels = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 15px;
  ${breakpoints('display', '', [{ L: 'none' }])}
  ${breakpoints('width', '', [{ L: '100%' }])}
  ${breakpoints('margin', '', [{ L: '0 25px' }])}
`

export default Cart
