import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setAddToCart,
  setCartItemsCount,
  setUpdateCart,
  setCartTotal,
} from 'sagaStore/actions'
import styled from 'styled-components'
import Link from 'next/link'

import StyledImage from 'components/General/Image'
import { fetchCart } from 'services/fetchCart'

const ProductItem = (props: {
  detailID: string
  imageSource: string
  title: string
  price: number
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const dispatch = useDispatch()

  const addToCartHandler = async () => {
    const productToCart = await fetchCart(props.detailID)
    dispatch(setAddToCart(productToCart))
    dispatch(setUpdateCart(props.detailID, 1)) //add quantity 1 to cart
    dispatch(setCartItemsCount())
    dispatch(setCartTotal())
  }
  const hoverHandler = () => {
    setIsHovered(true)
  }
  const hoverOut = () => {
    setIsHovered(false)
  }

  return (
    <Item onMouseEnter={hoverHandler} onMouseLeave={hoverOut}>
      <Link href={`/shop/${props.detailID}`} passHref>
        <OuterContent>
          <StyledImage
            imageSrc={props.imageSource}
            imageWidth={300}
            imageHeight={280}
            fitting={'cover'}
            layout={'intrinsic'}
          />
          <Content>
            <TitleWrapper>
              <Title>{props.title}</Title>
            </TitleWrapper>

            {isHovered && (
              <HoverContent>
                <Price>
                  <BoldPrice>{props.price} Kč</BoldPrice>
                </Price>
              </HoverContent>
            )}
          </Content>
        </OuterContent>
      </Link>
      {isHovered && (
        <AddToCart>
          <Button onClick={() => addToCartHandler()} className={'inverted'}>
            Add to Cart
          </Button>
        </AddToCart>
      )}
    </Item>
  )
}

const Item = styled.div`
  max-width: 250px;
  min-width: 225px;
  height: 340px;
  margin: 0 10px;
  cursor: pointer;
`
const OuterContent = styled.div``
const Content = styled.div``
const TitleWrapper = styled.div`
  margin: 10px 0;
`

const Title = styled.strong`
  margin: 0;
  font-weight: 600;
`
const HoverContent = styled.div``
const Price = styled.div`
  text-align: center;
  margin: 10px 0;
`
const BoldPrice = styled.strong`
  font-weight: 400;
`

const AddToCart = styled.div``
const Button = styled.button`
  padding: 10px 0;
  width: 100%;
`

export default ProductItem
