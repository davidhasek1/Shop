import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'

import Slider from 'components/Slider'
import ProductItem from 'components/ProductItem'
import Heading from 'components/Heading'
import { useState } from 'react'

const OurCollection = ({ products }) => {
  const productsRender = products.map((product) => (
    <ProductItem
      imageSource={`${url}${product.Images.formats.small.url}`}
      detailID={product.id}
      title={product.Title}
    />
  ))

  return (
    <Wrapper>
      <Heading>Shop Our collection</Heading>
      <SliderWrapper>
        <Slider>{productsRender}</Slider>
      </SliderWrapper>
      <ContentWrapper>
        <Grid>{productsRender}</Grid>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 75px 0;
`
const SliderWrapper = styled.div`
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')};
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  grid-gap: 30px;
  margin: 50px 0;

  ${breakpoints('grid-template-columns', '', [
    { L: 'auto auto' },
    { M: 'auto' },
  ])};
  ${breakpoints('margin', '', [{ L: '50px 10px' }, { M: '50px 10px' }])}
`

const ContentWrapper = styled.div`
  ${breakpoints('display', '', [{ L: 'none' }])}
`
export default OurCollection
