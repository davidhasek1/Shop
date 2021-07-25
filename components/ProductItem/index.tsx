import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  AddToCartState,
  CartProductsCount,
} from 'store/actions/userCartActions'
import styled from 'styled-components'
import Link from 'next/link'

import StyledImage from 'components/General/Image'

const ProductItem = ({ imageSource, title, detailID }) => {
  const [isHovered, setIsHovered] = useState(false)
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(AddToCartState(detailID))
    dispatch(CartProductsCount())
  }
  const hoverHandler = () => {
    setIsHovered(true)
  }
  const hoverOut = () => {
    setIsHovered(false)
  }

  return (
    <Item onMouseEnter={hoverHandler} onMouseLeave={hoverOut}>
      <Link href={`/shop/${detailID}`} passHref>
        <OuterContent>
          <StyledImage
            imageSrc={imageSource}
            imageWidth={300}
            imageHeight={280}
            scaleing={false}
            fitting={'cover'}
            layout={'intrinsic'}
          />
          <Content>
            <TitleWrapper>
              <Title>{title}</Title>
            </TitleWrapper>

            {isHovered && (
              <HoverContent>
                <Price>
                  <BoldPrice>1000 Kč</BoldPrice>
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
