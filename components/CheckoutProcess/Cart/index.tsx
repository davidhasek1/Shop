import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'

import { CartItemType } from 'types'

import CartItem from './CartItem'
import CartSummary from './CartSummary'

const Cart = (props: { items: CartItemType[] }) => {
  console.log('CART ITEMS', props.items)

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
      {props.items.map((item: CartItemType, idx: number) => (
        <CartItem
          key={item.productID}
          productId={item.productID}
          imgUrl={`${url}${item.imageUrl}`}
          title={item.title}
          price={item.price}
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
