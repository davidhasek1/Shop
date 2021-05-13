import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Image from "next/image"

const Gallery = () => {
  return (
    <SectionWrapper>
      <div>
        <h1>Gallery Section</h1>
      </div>
      <GalleryWrapper>
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
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  margin: 25px 0;
`
const GalleryWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
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
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.125);
    z-index: 50;
  }
`
const ImageStyled = styled(Image)`
  object-fit: cover;
  opacity: 1;
`
export default Gallery
