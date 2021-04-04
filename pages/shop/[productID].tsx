import styled from "styled-components";
import Image from "next/image";
import { AddShoppingCart } from "@styled-icons/material-twotone/AddShoppingCart";
import { StyledIconBase } from "@styled-icons/styled-icon";

const productDetail = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <DetailPageWrapper>
      <Title>{data.title}</Title>
      <ImageContainer>
        <Image src="/images/product.jpg" width={300} height={300} />
      </ImageContainer>
      <ContentWrapper>
        <Title>Description</Title>
        <p>{data.description}</p>
      </ContentWrapper>

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
`;
const Title = styled.h1``;
const ImageContainer = styled.div``;
const ContentWrapper = styled.div``;

const MobileAddItemWrapper = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  bottom: 10px;
  right: 10px;
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
const PriceTag = styled.strong`
  text-shadow: 1px 0px 5px #999999;
`;

export default productDetail;
