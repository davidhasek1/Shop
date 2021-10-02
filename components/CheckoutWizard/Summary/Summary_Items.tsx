import styled from 'styled-components'

import CustomImage from 'components/General/Image'

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

const SummaryItems = () => {
  const mockCart = [
    {
      title: 'item 1',
      price: 200,
      image: '/images/creme.jpg',
    },
    {
      title: 'item 2 blah blah',
      price: 10000,
      image: '/images/creme.jpg',
    },
    {
      title: 'item 2',
      price: 10000,
      image: '/images/creme.jpg',
    },
  ]
  return (
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
  )
}

export default SummaryItems
