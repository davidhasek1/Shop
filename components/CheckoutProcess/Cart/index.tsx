import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItems } from 'sagaStore/selectors'

import CartItem from './CartItem'
import CartSummary from './CartSummary'

export type CartType = {
  productID: string //maybe ANY
  imageUrl: string
  title: string
  unitPrice: number
  inStockCount: number
}

const Cart = () => {
  const cartItems = useSelector(getCartItems)
  const dispatch = useDispatch()

  //TODO: set state on cart items array and render into cart component

  const mockCartItems: CartType[] = [
    {
      productID: '101',
      imageUrl: '/images/testimgH.jpg',
      title: 'Product in cart',
      unitPrice: 1000,
      inStockCount: 10, //Z BE příjde množství produktu na skladě
    },
    {
      productID: '102',
      imageUrl: '/images/testimgH.jpg',
      title: 'Product in cart 2',
      unitPrice: 500,
      inStockCount: 10,
    },
  ]

  return (
    <Wrapper>
      <CartTitle>Your Cart</CartTitle>
      <CartLabelsWrapper>
        <Labels>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </Labels>
      </CartLabelsWrapper>
      {mockCartItems.map((item, idx) => (
        <CartItem
          key={item.productID}
          productId={item.productID}
          imgUrl={item.imageUrl}
          title={item.title}
          price={item.unitPrice}
        />
      ))}
      <CartSummary />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`
const CartTitle = styled.h1`
  text-align: left;
`
const CartLabelsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`
const Labels = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`

export default Cart
