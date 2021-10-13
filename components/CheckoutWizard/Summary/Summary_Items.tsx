import styled from 'styled-components'

import CustomImage from 'components/General/Image'
import { CartItemType } from 'types'
import { url } from 'config'

const CartItems = styled.div``
const Item = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
`
const Title = styled.div`
  width: 100%;
`
const Price = styled.div`
  width: 50%;
`
const ImageWrapper = styled.div`
  position: relative;
`
const Quantity = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.fade3};
  color: ${(props) => props.theme.white};
  top: -5px;
  right: -5px;
  z-index: 1;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
`

const SummaryItems = (props: { itemsFromCart: CartItemType[] }) => {
  return (
    <CartItems>
      <div>
        {props.itemsFromCart?.map((item) => (
          <Item>
            <ImageWrapper>
              <Quantity>{item.quantity}</Quantity>
              <CustomImage
                imageSrc={`${url}${item.imageUrl}`}
                imageWidth={140}
                imageHeight={140}
              />
            </ImageWrapper>
            <Title>{item.title}</Title>
            <Price>{item.itemTotal}Kč</Price>
          </Item>
        ))}
      </div>
    </CartItems>
  )
}

export default SummaryItems
