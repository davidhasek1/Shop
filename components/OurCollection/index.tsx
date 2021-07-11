import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'

import Slider from 'components/Slider'
import ProductItem from 'components/ProductItem'
import Heading from 'components/Heading'
import GridLyout from 'components/GridLayout'

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
        <GridLyout content={productsRender} />
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

const ContentWrapper = styled.div`
  ${breakpoints('display', '', [{ L: 'none' }])}
`
export default OurCollection
