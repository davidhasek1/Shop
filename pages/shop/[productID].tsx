import styled from 'styled-components'
import { url } from 'config'
import { breakpoints } from 'utils/responsivity'
import { AddShoppingCart } from '@styled-icons/material-twotone/AddShoppingCart'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { AddToCartState } from 'store/actions/userCartActions'
import StyledImage from 'components/Image'

const productDetail = ({ product }) => {
  const dispatch = useDispatch()
  console.log(product.Images.formats[0])
  return <Container>Breakpoinst constatnts test</Container>
}

export const getStaticPaths = async () => {
  const res = await fetch(`${url}/products`)
  const data = await res.json()

  const productIDs = []
  for (let key in data) {
    let stringData = data[key]._id.toString()
    productIDs.push({ params: { productID: stringData } })
  }
  console.log(res)
  return {
    paths: productIDs,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${url}/products/${params.productID}`)
    const data = await res.json()
    return { props: { product: data, fallback: true } }
  } catch (error) {
    console.log('[FETCH ERROR: Product Detail]', error)
    return {
      props: {
        products: {},
        fallback: true,
      },
    }
  }
}

const Container = styled.div`
  background-color: red;
  font-size: 110px;
  ${breakpoints('font-size', '', [{ XL: '80px' }, { L: '60px' }])}
`

export default productDetail

/* <DetailPageWrapper>
      <Title>{product.Title}</Title>
      <Main>
        <RightContainer>
          <Slider>
            <StyledImage
              imageSrc={`${url}${product.Images.formats.large.url}`} //Přes formats použít menší velikost pro Shop Item ${url}${product.Images.formats.thumbnail.url}
              imageWidth={500}
              imageHeight={500}
              scaleing={false}
              fitting={'cover'}
              layout={'intrinsic'}
            />
          </Slider>
          <Actions>
            <ActionsWrap>
              <Actions>
                <Hole />
                <InputWrap>
                  <StyledInput type="number" />
                  ks
                </InputWrap>
                <Button
                  icon={<AddShoppingCart size={35} />}
                />
              </Actions>
              <Line />
              <PriceTag>1000 Kč</PriceTag>
            </ActionsWrap>
          </Actions>
        </RightContainer>
        <ContentWrapper>
          <Title>Description</Title>
          <DescriptionText>
            <ReactMarkdown>{product.Description}</ReactMarkdown>
          </DescriptionText>
        </ContentWrapper>
      </Main> */
