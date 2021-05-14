import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import Modal from "./Modal";
import Image from "next/image";
import {RootStateOrAny , useSelector, useDispatch } from "react-redux";
import {openProductDetail} from 'store/actions/handlersActions'
import StyledImage from 'components/Image'

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { isProductDetailOpen } = useSelector((state: RootStateOrAny) => state.handlers);

  return isProductDetailOpen ? (
    <Modal closeModal={() => dispatch(openProductDetail(false))}>
      <ProductWrapper>
        <ImageContainer>
          <Image src="/images/product.jpg" width={500} height={500} />
        </ImageContainer>
        <DetailContent>
          <Title>Details</Title>
          <Text>
            ipsumAliqua exercitation nostrud consequat elit ut. Ullamco sint et
            magna sunt elit laboris irure occaecat. Laboris quis cupidatat
            mollit fugiat aliquip ea vUt anim nulla in culpa. elit et
            reprehenderit occaecat aliquip non ullamco pariatur. Ipsum culpa
            consequat enim adipisicing do consequat fugiat.
          </Text>
          <Title>Recomandations</Title>
          <Text>
            Et enim nostrud irure ea proident non exercitation sit. Non
            consectetur officia exercitation consectetur aliquip elit in labore
            aliquip ullamco ipsum dolor minim. Exercitation eiusmod ea non elit
            Lorem ea voluptate veniam dolore commodo nisi commodo id excepteur.
            Laboris duis nulla elit non aliqua. Non ad commodo incididunt
          </Text>
        </DetailContent>
      </ProductWrapper>
    </Modal>
  ) : null;
};

const ProductWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  ${breakpoints("flex-direction", "", [{ 800: "column" }])}
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  margin: 20px;
  height: 100%;
  ${breakpoints("width", "", [{ 800: "90%" }])}
`;
const DetailContent = styled.div`
  width: 65%;
  margin: 20px;
  ${breakpoints("width", "", [{ 800: "90%" }])}
`;
const Title = styled.h1`
  ${breakpoints("font-size", "", [{ 800: "20px" }])}
`;
const Text = styled.p`
  ${breakpoints("font-size", "", [{ 800: "14px" }])}
`;

export default ProductDetail;
