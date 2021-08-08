import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItems } from 'sagaStore/selectors'

import CustomImage from 'components/General/Image'
import Link from 'next/link'

const Cart = () => {
  const cartItems = useSelector(getCartItems)
  const dispatch = useDispatch()

  //TODO: set state on cart items array and render into cart component

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
      <CartContent>
        <ItemDescription>
          <CartImage>
            <CustomImage
              imageSrc={'/images/testimgH.jpg'}
              imageWidth={150}
              imageHeight={150}
            />
          </CartImage>

          <TitleWrapper>
            <h3 style={{ margin: 0 }}>Product Title</h3>
            <RemoveButton onClick={() => console.log('TODO: Remove from cart')}>
              REMOVE
            </RemoveButton>
          </TitleWrapper>
        </ItemDescription>
        <PriceDescription>
          <UnitPrice>1000 Kč</UnitPrice>
          <ItemQuantity> + 2 -</ItemQuantity>
          <ItemTotalPrice>2000 Kč</ItemTotalPrice>
        </PriceDescription>
      </CartContent>
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
const CartContent = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.fade2}; //TODO: use it in cart Item
  border-bottom: 1px solid ${(props) => props.theme.fade2}; //TODO: use it in cart Item
  padding: 30px 0;
`
const ItemDescription = styled.div`
  display: flex;
  width: 50%;
`
const CartImage = styled.div`
  margin-right: 15%;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`
const RemoveButton = styled.div`
  font-size: 14px;
  color: #aaaaaa;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`
/************************* */
const PriceDescription = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`
const UnitPrice = styled.div`
  width: 100%;
  text-align: left;
`
const ItemQuantity = styled.div`
  width: 100%;
`
const ItemTotalPrice = styled.div`
  width: 100%;
  text-align: right;
`
export default Cart
