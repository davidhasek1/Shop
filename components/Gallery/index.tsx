import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Column from "./GalleryColumn"
import Slider from "components/Slider"
import StyledImage from "../Image"
import Heading from "components/Heading"

const Gallery = () => {
  return (
    <SectionWrapper>
      <Heading>Gallery Section 🌆</Heading>
      <GalleryWrapper>
        <Row>
          <Column />
          <Column />
          <Column />
          <Column />
        </Row>
        <SliderWrapper>
          <Slider>
            <StyledImage
              imageSrc={"/images/testimgW.jpg"}
              imageWidth={300} //W/H budoud dynamicky z cmss
              imageHeight={300}
              scaleing={true}
              fitting={"cover"}
              layout={"fixed"}
            />
            <StyledImage
              imageSrc={"/images/testimgH.jpg"}
              imageWidth={300}
              imageHeight={300}
              scaleing={true}
              fitting={"cover"}
              layout={"fixed"}
            />
            <StyledImage
              imageSrc={"/images/headerImg.jpg"}
              imageWidth={300} //W/H budoud dynamicky z cmss
              imageHeight={300}
              scaleing={true}
              fitting={"cover"}
              layout={"fixed"}
            />
            <StyledImage
              imageSrc={"/images/testimgW.jpg"}
              imageWidth={300}
              imageHeight={300}
              scaleing={true}
              fitting={"cover"}
              layout={"fixed"}
            />
          </Slider>
        </SliderWrapper>
      </GalleryWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  padding: 50px 0;
`
const GalleryWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0px;
  ${breakpoints("display", "", [{ 1200: "none" }])}
`
const SliderWrapper = styled.div`
  ${breakpoints("display", "", [{ 1200: "none" }], "min-width")}
`
export default Gallery
