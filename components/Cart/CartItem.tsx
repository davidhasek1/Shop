import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCartRemove, setCartTotal } from 'sagaStore/actions'

import CustomImage from 'components/General/Image'
import QuantityHandler from 'components/QuantityHandler'

const CartItem = (props: {
  productId: string
  imgUrl: string
  title: string
  price: number
  quantity: number
  itemTotal: number
}) => {
  const [quantity, setQuantity] = useState(props.quantity) //redxu quantity

  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(setCartRemove(props.productId))
    dispatch(setCartTotal())
  }

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

          <RemoveButton onClick={() => removeItemHandler()}>
            REMOVE
          </RemoveButton>
        </TitleWrapper>
      </ItemDescription>
      <Labels>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </Labels>
      <PriceDescription>
        <UnitPrice>{props.price} Kč</UnitPrice>
        <ItemQuantity>
          <QuantityHandler
            productID={props.productId}
            quantity={quantity}
            setQuantity={setQuantity}
            isCart={true}
          />
        </ItemQuantity>{' '}
        <ItemTotalPrice>{props.itemTotal} Kč</ItemTotalPrice>{' '}
      </PriceDescription>
    </CartContent>
  )
}

const CartContent = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.fade2};
  //border-bottom: 1px solid ${(props) => props.theme.fade2};
  padding: 30px 0;
  margin: 0 15px;
  ${(props) => props.theme.breakpoint.L} {
    flex-direction: column;
    align-items: center;
  }
`
const ItemDescription = styled.div`
  display: flex;
  width: 50%;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
    margin: 10px 0;
  }
`
const CartImage = styled.div`
  margin-right: 15%;
  ${(props) => props.theme.breakpoint.M} {
    margin-right: 10px;
    display: flex;
    justify-content: center;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  ${(props) => props.theme.breakpoint.L} {
    align-items: flex-start;
    text-align: left;
  }
`
const Labels = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.L} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.M} {
    display: flex;
  }
`
const Title = styled.h3`
  cursor: pointer;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
  }
`
const RemoveButton = styled.div`
  font-size: 12px;
  color: #aaaaaa;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
  ${(props) => props.theme.breakpoint.M} {
    padding: 10px 0;
  }
`
/************************* */
const PriceDescription = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
  }
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
