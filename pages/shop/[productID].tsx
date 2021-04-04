import styled from "styled-components";
import { breakpoints } from "../../utils/responsivity";
import Image from "next/image";
import { AddShoppingCart } from "@styled-icons/material-twotone/AddShoppingCart";
import { StyledIconBase } from "@styled-icons/styled-icon";

const productDetail = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <DetailPageWrapper>
      <Title>{data.title}</Title>
      <Main>
        <RightContainer>
          <Image src="/images/product.jpg" width={300} height={300} />
          <Actions>
            <ActionsWrap>
              <Actions>
                <InputWrap>
                  <StyledInput type="number" />
                  ks
                </InputWrap>
                <StyledButton>
                  <AddShoppingCart size={35} />
                </StyledButton>
              </Actions>

              <Line />
              <PriceTag>1000 Kč</PriceTag>
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
  );
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`http://localhost:3000/api/shop/`);
  const ids = await res.json(); //pole
  const arrayIDs = [];

  for (let key in ids) {
    let stringid = ids[key]._id.toString();
    arrayIDs.push({
      params: { productID: stringid },
    });
  }
  return {
    paths: arrayIDs,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3000/api/shop/${params.productID}/`
  ); //data pro jeden product
  const product = await res.json();
  console.log(product);
  return {
    props: {
      data: product,
    },
  };
};

const DetailPageWrapper = styled.div`
  padding: 50px 0;
  position: relative;
  ${breakpoints("height", "", [{ 600: "100vh" }], "min-width")}
`;
const Main = styled.div`
  ${breakpoints("display", "", [{ 600: "flex" }], "min-width")}
  ${breakpoints("flex-direction", "", [{ 600: "row-reverse" }], "min-width")}
`;
const Title = styled.h1`
  text-align: left;
  padding: 0 10px;
`;
const RightContainer = styled.div`
  ${breakpoints("width", "", [{ 600: "50%" }], "min-width")}
`;
const Actions = styled.div`
  ${breakpoints("display", "", [{ 600: "flex" }], "min-width")}
  ${breakpoints("justify-content", "", [{ 600: "center" }], "min-width")}
  ${breakpoints("align-items", "", [{ 600: "center" }], "min-width")}
  ${breakpoints("display", "", [{ 600: "none" }])}
   padding: 30px;
`;
const ActionsWrap = styled.div`
  ${breakpoints("display", "", [{ 600: "flex" }], "min-width")}
  background: #ffbac9;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px #cccccc;
  ${StyledIconBase} {
    color: #ffffff;
  }
`;
const InputWrap = styled.div`
  margin-right: 15px;
`;
const StyledInput = styled.input`
  width: 45px;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #ffffff;
  text-align: center;
  color: #ffffff;
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Line = styled.div`
  border: none;
  border-right: 4px dotted #fff;
`;
const ContentWrapper = styled.div`
  ${breakpoints("width", "", [{ 600: "50%" }], "min-width")}
`;
const DescriptionText = styled.p`
  text-align: left;
  padding: 0 10px;
`;

const MobileAddItemWrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  bottom: 10px;
  right: 10px;
  ${breakpoints("display", "", [{ 600: "none" }], "min-width")}
`;
const MobileAddButton = styled.div`
  width: 70px;
  height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 186, 201, 0.8);
  border: 1px solid #ffbac9;
  border-radius: 50%;
  cursor: pointer;
  ${StyledIconBase} {
    color: #ffffff;
  }
`;
const PriceTag = styled.h3`
  text-shadow: 1px 0px 5px #999999;
  margin: 0;
  ${breakpoints("margin", "", [{ 600: "10px 0" }], "min-width")}
  ${breakpoints("padding", "", [{ 600: "30px 10px" }], "min-width")}
`;

export default productDetail;
