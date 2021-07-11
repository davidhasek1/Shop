import { InfoCircle, ShoppingBag } from '@styled-icons/boxicons-regular'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { openProductDetail } from 'store/actions/handlersActions'
import {
  AddToCartState,
  CartProductsCount,
} from 'store/actions/userCartActions'
import styled from 'styled-components'
import Link from 'next/link'

import Button from 'components/UI/Button'
import StyledImage from 'components/Image'

const ProductItem = ({ imageSource, title, detailID }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  console.log(router.route)

  const addToCartHandler = () => {
    dispatch(AddToCartState(detailID))
    dispatch(CartProductsCount())
  }

  return (
    <Link href={`/shop/${detailID}`} passHref>
      <Item>
        <StyledImage
          imageSrc={imageSource}
          imageWidth={500}
          imageHeight={375}
          scaleing={false}
          fitting={'cover'}
          layout={'intrinsic'}
        />
        <Content>
          <Title>{title}</Title>
          <Price>
            <BoldPrice>1000 Kč</BoldPrice>
          </Price>
          <AddToCart>
            <Button
              styleType={'INVERT'}
              width={'100%'}
              paddingValue={'7px 10px'}
              onClick={() => addToCartHandler()}
            >
              Add to Cart
            </Button>
          </AddToCart>
        </Content>
      </Item>
    </Link>
  )
}

const Item = styled.div`
  max-width: 250px;
  min-width: 225px;
  background-color: ${(props) => props.theme.white};

  margin: 0 15px;
  &:hover {
    box-shadow: 0 0 8px ${(props) => props.theme.pink};
  }
`
const Content = styled.div`
  padding: 10px;
`
const Title = styled.h3`
  margin: 0;
  line-height: 24px;
`
const Price = styled.div`
  text-align: center;
`
const BoldPrice = styled.strong`
  font-weight: 400;
`

const AddToCart = styled.div``

export default ProductItem
