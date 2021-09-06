import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import Link from 'next/link'
import { useState } from 'react'

import CustomImage from 'components/General/Image'
import QuantityHandler from 'components/QuantityHandler'

const CartItem = (props: {
  productId: string
  imgUrl: string
  title: string
  price: number
  quantity: number
}) => {
  const [quantity, setQuantity] = useState(props.quantity)
  return (
    <CartContent>
      <ItemDescription>
        <CartImage>
          <CustomImage
            imageSrc={props.imgUrl}
            imageWidth={150}
            imageHeight={150}
          />
        </CartImage>

        <TitleWrapper>
          <Link href={`/shop/${props.productId}`}>
            <Title style={{ margin: 0 }}>{props.title}</Title>
          </Link>

          <RemoveButton onClick={() => console.log('TODO: Remove from cart')}>
            REMOVE
          </RemoveButton>
        </TitleWrapper>
      </ItemDescription>

      <PriceDescription>
        <UnitPrice>{props.price} Kč</UnitPrice>
        <ItemQuantity>
          <QuantityHandler quantity={quantity} setQuantity={setQuantity} />
        </ItemQuantity>{' '}
        {/* TODO: Do I need props? */}
        <ItemTotalPrice>2000 Kč</ItemTotalPrice>{' '}
        {/* TODO: Do I need props for total price? */}
      </PriceDescription>
    </CartContent>
  )
}

const CartContent = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.fade2};
  //border-bottom: 1px solid ${(props) => props.theme.fade2};
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
const Title = styled.h3`
  cursor: pointer;
`
const RemoveButton = styled.div`
  font-size: 12px;
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
  font-weight: 600;
`
const ItemQuantity = styled.div`
  width: 100%;
`
const ItemTotalPrice = styled.div`
  width: 100%;
  text-align: right;
  font-weight: 600;
`
export default CartItem
