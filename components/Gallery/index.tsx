import styled from "styled-components";
import { breakpoints } from "utils/responsivity";
import Image from "next/image";

const Gallery = () => {
  return (
    <Row>
      <Column>
        <ImageStyled src={"/images/testimgW.jpg"} width={850} height={650} />
        <ImageStyled src={"/images/testimgH.jpg"} width={500} height={700} />
      </Column>
      <Column>
        <ImageStyled src={"/images/testimgH.jpg"} width={500} height={700} />
        <ImageStyled src={"/images/testimgW.jpg"} width={850} height={650} />
      </Column>
      <Column>
        <ImageStyled src={"/images/testimgW.jpg"} width={850} height={650} />
        <ImageStyled src={"/images/testimgH.jpg"} width={500} height={700} />
      </Column>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0px;
`;
const Column = styled.div`
  flex: 33%;
  width: auto;
  display: inline-block;
  font-size: 0; // TO REMOVE INLIEN-BLOCK WHITESPACE which is caused by default

  ${breakpoints("flex", "", [{ 800: "50%" }, { 600: "100%" }])}
  ${breakpoints("max-width", "", [{ 800: "50%" }, { 600: "100%" }])}
`;
const ImageStyled = styled(Image)`
  vertical-align: top;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;
export default Gallery;
