import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Image from "next/image"

const Gallery = () => {
  return (
    <GalleryWrapper>
      <div>
        <h1>Gallery Section</h1>
      </div>
      <Row>
        <Column>
          <ImageWrapper>
            <ImageStyled
              src={"/images/headerImg.jpg"}
              width={850}
              height={650}
            />
          </ImageWrapper>
          <ImageWrapper>
            <ImageStyled
              src={"/images/testimgH.jpg"}
              width={500}
              height={700}
            />
          </ImageWrapper>
        </Column>
        <Column>
          <ImageWrapper>
            <ImageStyled
              src={"/images/testimgH.jpg"}
              width={500}
              height={700}
            />
          </ImageWrapper>
          <ImageWrapper>
            <ImageStyled
              src={"/images/testimgW.jpg"}
              width={850}
              height={650}
            />
          </ImageWrapper>
        </Column>
        <Column>
          <ImageWrapper>
            <ImageStyled
              src={"/images/testimgW.jpg"}
              width={850}
              height={650}
            />
          </ImageWrapper>
          <ImageWrapper>
            <ImageStyled
              src={"/images/testimgH.jpg"}
              width={500}
              height={700}
            />
          </ImageWrapper>
        </Column>
        <Column>
          <ImageWrapper>
            <ImageStyled
              src={"/images/testimgH.jpg"}
              width={500}
              height={700}
            />
          </ImageWrapper>
          <ImageWrapper>
            <ImageStyled
              src={"/images/testimgW.jpg"}
              width={850}
              height={650}
            />
          </ImageWrapper>
        </Column>
      </Row>
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  margin: 25px 0;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0px;
`
const Column = styled.div`
  flex: 25%;
  width: auto;
  display: inline-block;
  font-size: 0; // TO REMOVE INLIEN-BLOCK WHITESPACE which is caused by default

  ${breakpoints("flex", "", [{ 800: "50%" }, { 600: "100%" }])}
  ${breakpoints("max-width", "", [{ 800: "50%" }, { 600: "100%" }])}
`
const ImageWrapper = styled.div`
  &:hover {
    transform: scale(1.2);
    z-index: 50;
    transition: 0.5s ease-in;
  }
`
const ImageStyled = styled(Image)`
  object-fit: cover;
  opacity: 1;
`
export default Gallery
