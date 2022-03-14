import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  setAddToCart,
  setCartItemsCount,
  setUpdateCart,
  setCartTotal,
} from 'sagaStore/actions'
import { fetchDataById } from 'services/fetchDataById'
import Link from 'next/link'

import StyledImage from 'components/General/Image'
import LoadingSpinner from 'components/General/LoadingSpinner'
import ErrorModal from 'components/Modal'

const ProductItem = (props: {
  detailID: string
  imageSource: string
  title: string
  price: number
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const dispatch = useDispatch()

  const addToCartHandler = async () => {
    setIsLoading(true)
    const productToCart = await fetchDataById(props.detailID, 'products')

    if (productToCart.error) {
      setError({
        statusCode: productToCart.statusCode,
        error: productToCart.error,
        message: productToCart.message,
      })
    } else {
      dispatch(setAddToCart(productToCart))
      dispatch(setUpdateCart(props.detailID, 1)) //add quantity 1 to cart
      dispatch(setCartItemsCount())
      dispatch(setCartTotal())
      setIsLoading(false)
    }
  }
  const hoverHandler = () => {
    setIsHovered(true)
  }
  const hoverOut = () => {
    setIsHovered(false)
  }

  const closeErrorModal = () => {
    setIsLoading(false)
    setError(null)
  }

  return (
    <Item onMouseEnter={hoverHandler} onMouseLeave={hoverOut}>
      {error && (
        <ErrorModal
          title={`${error.error} (${error.statusCode})`}
          message={error.message}
          onClose={closeErrorModal}
        />
      )}
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
            {isLoading ? <LoadingSpinner spinnerSize={25} /> : 'Add to Cart'}
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
