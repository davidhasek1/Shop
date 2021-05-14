import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import { AddShoppingCart } from "@styled-icons/material-twotone/AddShoppingCart"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { useDispatch } from "react-redux"
import { AddToCartState } from "store/actions/userCartActions"
import Button from "components/UI/Button"
import StyledImage from "components/Image"

const productDetail = (props) => {
  const dispatch = useDispatch()
  const { data } = props
  const productID = data._id
  console.log(data)

  return (
    <DetailPageWrapper>
      <Title>{data.title}</Title>
      <Main>
        <RightContainer>
          <Slider>
            <StyledImage
              imageSrc={"/images/testimgW.jpg"}
              imageWidth={500}
              imageHeight={500}
              scaleing={false}
              fitting={"cover"}
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
                  onClick={() => dispatch(AddToCartState(productID))}
                />
              </Actions>
              <Line />
              <PriceTag>{data.price} Kč</PriceTag>
            </ActionsWrap>
          </Actions>
        </RightContainer>
        <ContentWrapper>
          <Title>Description</Title>
          <DescriptionText>{data.description}</DescriptionText>
          <Title>Description</Title>
          <DescriptionText>{data.description}</DescriptionText>
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

export const getStaticPaths = async (context) => {
  const res = await fetch(`http://localhost:3000/api/shop/`)
  const ids = await res.json() //pole
  const arrayIDs = []

  for (let key in ids) {
    let stringid = ids[key]._id.toString()
    arrayIDs.push({
      params: { productID: stringid },
    })
  }
  return {
    paths: arrayIDs,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { params } = context

  const res = await fetch(`http://localhost:3000/api/shop/${params.productID}/`) //data pro jeden product
  const product = await res.json()
  console.log(product)
  return {
    props: {
      data: product,
    },
  }
}

const DetailPageWrapper = styled.div`
  padding: 50px 0;
`
const Main = styled.div`
  ${breakpoints("display", "", [{ 600: "flex" }], "min-width")}
  ${breakpoints("flex-direction", "", [{ 600: "row-reverse" }], "min-width")}
`
const Title = styled.h1`
  text-align: left;
  padding: 0 10px;
`
const RightContainer = styled.div`
  ${breakpoints("width", "", [{ 600: "50%" }], "min-width")}
`
const Slider = styled.div`
  //TODO - slider fotek
  display: flex;
  justify-content: center;
`
const Actions = styled.div`
  ${breakpoints("display", "", [{ 600: "flex" }], "min-width")}
  ${breakpoints("justify-content", "", [{ 600: "center" }], "min-width")}
  ${breakpoints("align-items", "", [{ 600: "center" }], "min-width")}
  ${breakpoints("display", "", [{ 600: "none" }])}
  padding: 30px;
  margin: 30px 0;
`
const Hole = styled.div`
  margin-right: 20px;
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.theme.lightGray};
  border-radius: 100%;
`
const ActionsWrap = styled.div`
  ${breakpoints("display", "", [{ 600: "flex" }], "min-width")}
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
  border-bottom: 1px solid ${(props) => props.theme.lightGray};
  text-align: center;
`
const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`
const Line = styled.div`
  border: none;
  border-right: 4px dotted ${(props) => props.theme.lightGray};
`
const ContentWrapper = styled.div`
  ${breakpoints("width", "", [{ 600: "50%" }], "min-width")}
  background-color: ${(props) => props.theme.white};
  padding: 15px 0;
  height: fit-content;
`
const DescriptionText = styled.p`
  text-align: left;
  padding: 0 10px;
`

const MobileAddItemWrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  bottom: 10px;
  right: 10px;
  ${breakpoints("display", "", [{ 600: "none" }], "min-width")}
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
  ${breakpoints("margin", "", [{ 600: "10px 0" }], "min-width")}
  ${breakpoints("padding", "", [{ 600: "30px 10px" }], "min-width")}
`

export default productDetail
