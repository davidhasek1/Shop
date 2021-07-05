import styled from 'styled-components'
import { url } from 'config'
import { breakpoints } from 'utils/responsivity'
import { AddShoppingCart } from '@styled-icons/material-twotone/AddShoppingCart'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { useDispatch } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { AddToCartState } from 'store/actions/userCartActions'
import Button from 'components/UI/Button'
import StyledImage from 'components/Image'

const productDetail = ({ product }) => {
  const dispatch = useDispatch()
  console.log(product.Images.formats[0])
  return (
    <DetailPageWrapper>
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
                  /* onClick={() => dispatch(AddToCartState(productID))} */
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
      </Main>

      <MobileAddItemWrapper>
        <PriceTag>1000 Kč</PriceTag>
        <MobileAddButton>
          <AddShoppingCart size={35} />
        </MobileAddButton>
      </MobileAddItemWrapper>
    </DetailPageWrapper>
  )
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

const DetailPageWrapper = styled.div`
  padding: 50px 0;
`
const Main = styled.div`
  ${breakpoints('display', '', [{ 600: 'flex' }], 'min-width')}
  ${breakpoints('flex-direction', '', [{ 600: 'row-reverse' }], 'min-width')}
`
const Title = styled.h1`
  text-align: left;
  padding: 0 10px;
`
const RightContainer = styled.div`
  ${breakpoints('width', '', [{ 600: '50%' }], 'min-width')}
`
const Slider = styled.div`
  //TODO - slider fotek
  display: flex;
  justify-content: center;
`
const Actions = styled.div`
  ${breakpoints('display', '', [{ 600: 'flex' }], 'min-width')}
  ${breakpoints('justify-content', '', [{ 600: 'center' }], 'min-width')}
  ${breakpoints('align-items', '', [{ 600: 'center' }], 'min-width')}
  ${breakpoints('display', '', [{ 600: 'none' }])}
  padding: 30px;
  margin: 30px 0;
`
const Hole = styled.div`
  margin-right: 20px;
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.theme.fade1};
  border-radius: 100%;
`
const ActionsWrap = styled.div`
  ${breakpoints('display', '', [{ 600: 'flex' }], 'min-width')}
  background: ${(props) => props.theme.white};
  color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px ${(props) => props.theme.pink};
  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
  }
`
const InputWrap = styled.div`
  margin-right: 15px;
`
const StyledInput = styled.input`
  width: 45px;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.fade1};
  text-align: center;
`
const Line = styled.div`
  border: none;
  border-right: 4px dotted ${(props) => props.theme.fade1};
`
const ContentWrapper = styled.div`
  ${breakpoints('width', '', [{ 600: '50%' }], 'min-width')}
  background-color: ${(props) => props.theme.white};
  padding: 15px 0;
  height: fit-content;
`
const DescriptionText = styled.div`
  text-align: left;
  padding: 0 10px;
`

const MobileAddItemWrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  bottom: 10px;
  right: 10px;
  ${breakpoints('display', '', [{ 600: 'none' }], 'min-width')}
`
const MobileAddButton = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.pink};
  border: 1px solid ${(props) => props.theme.pink};
  border-radius: 50%;
  cursor: pointer;
  ${StyledIconBase} {
    color: ${(props) => props.theme.white};
  }
`
const PriceTag = styled.h3`
  text-shadow: 1px 0px 5px #999999;
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
  ${breakpoints('margin', '', [{ 600: '10px 0' }], 'min-width')}
  ${breakpoints('padding', '', [{ 600: '30px 10px' }], 'min-width')}
`

export default productDetail
