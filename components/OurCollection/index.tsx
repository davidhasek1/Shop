import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'
import Link from 'next/link'

import Slider from 'components/General/Slider'
import ProductItem from 'components/ProductItem'
import Heading from 'components/General/Heading'
import GridLyout from 'components/Layout/GridLayout'

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
      <Link href={'/shop'}>
        <Button>View all</Button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 75px auto;
  max-width: 1100px;
`
const SliderWrapper = styled.div`
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')};
`
const ContentWrapper = styled.div`
  ${breakpoints('display', '', [{ L: 'none' }])}
`
const Button = styled.button`
  padding: 10px 60px;
`
export default OurCollection
