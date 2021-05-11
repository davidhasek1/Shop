import styled from "styled-components";
import Image from "next/image";

const HomeImagesFrame = () => {
  return (
    <Row>
      <Column>
      
        <ImageStyled src={"/images/testimgW.jpg"} width={700} height={500} />
        <ImageStyled src={"/images/testimgH.jpg"} width={500} height={700} />
      </Column>
      <Column>
        <ImageStyled src={"/images/testimgH.jpg"} width={500} height={700} />
        <ImageStyled src={"/images/testimgW.jpg"} width={700} height={500} />
      </Column>
      <Column>
        <ImageStyled src={"/images/testimgW.jpg"} width={700} height={500} />
        <ImageStyled src={"/images/testimgH.jpg"} width={500} height={700} />
      </Column>
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  flex: 33%;
  width: auto;
  display: inline-block;
  font-size: 0; // TO REMOVE INLIEN-BLOCK WHITESPACE which is caused by default 
`;
const ImageStyled = styled(Image)`
  vertical-align: top;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export default HomeImagesFrame;
