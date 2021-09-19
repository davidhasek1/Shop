import styled from 'styled-components'

import CustomImage from 'components/General/Image'
import CustomInput from 'components/General/CustomInput'

const mockCart = [
  {
    title: 'item 1',
    price: 200,
    image: '/images/creme.jpg',
  },
  {
    title: 'item 2',
    price: 10000,
    image: '/images/creme.jpg',
  },
]

const Summary = () => {
  return (
    <SummaryWrapper>
      <CartItems>
        <div>
          {mockCart.map((item) => (
            <Item>
              <CustomImage
                imageSrc={item.image}
                imageWidth={140}
                imageHeight={140}
              />
              <Title>{item.title}</Title>
              <Price>{item.price}Kč</Price>
            </Item>
          ))}
        </div>
      </CartItems>
      <Separator />
      <CouponWrapper>
        <CustomInput
          type={'text'}
          onChange={() => [
            /* TODO */
          ]}
          value={''}
          name={'coupon'}
          placeholder={'Apply coupon'}
        />
        <Button>Apply</Button>
      </CouponWrapper>
    </SummaryWrapper>
  )
}

const SummaryWrapper = styled.div``
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
const CouponWrapper = styled.div`
  display: flex;
`
const Button = styled.button`
  padding: 0 10px;
`
const Separator = styled.div`
  border: none;
  border-top: 1px solid #eee;
`

export default Summary
