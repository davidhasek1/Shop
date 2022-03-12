import styled from 'styled-components'

import { url } from 'config'
import Link from 'next/link'

import Slider from 'components/General/Slider'
import ProductItem from 'components/ProductItem'
import GridLyout from 'components/Layout/GridLayout'

const Wrapper = styled.div`
  margin: 75px auto;
  max-width: 1100px;
`
const WrapperTitle = styled.div`
  padding-top: 20px;
`
const SliderWrapper = styled.div`
  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.L} {
    display: flex;
    overflow-y: hidden;
  }
`
const ContentWrapper = styled.div`
  ${(props) => props.theme.breakpoint.L} {
    display: none;
  }
`
const Button = styled.button`
  padding: 10px 60px;
`

const OurCollection = ({ products }) => {
  console.log(products)
  const productsRender = products.map((product) => (
    <ProductItem
      key={product.id}
      imageSource={`${url}${product.Images.formats.small.url}`}
      detailID={product.id}
      title={product.Title}
      price={product.Price}
    />
  ))

  return (
    <Wrapper>
      <WrapperTitle>
        <h2>Shop Our collection</h2>
      </WrapperTitle>
      <SliderWrapper>
        <Slider slideDistatnce={0}>{productsRender}</Slider>{' '}
        {/* TODO: for now slider is not used. */}
      </SliderWrapper>
      <ContentWrapper>
        <GridLyout content={productsRender} />
      </ContentWrapper>
      <Link href={'/shop'}>
        <Button className={'inverted'}>View all</Button>
      </Link>
    </Wrapper>
  )
}

export default OurCollection
