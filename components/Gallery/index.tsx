import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Column from "./GalleryColumn"

const Gallery = () => {
  return (
    <SectionWrapper>
      <div>
        <h1>Gallery Section 🌆</h1>
      </div>
      <GalleryWrapper>
        <Row>
          <Column />
          <Column />
          <Column />
          <Column />
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
export default Gallery
