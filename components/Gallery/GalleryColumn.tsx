import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import GalleryImage from "./Image"

const GalleryColumn = () => {
  return (
    <Column>
      <GalleryImage
        imageSrc={"/images/testimgW.jpg"}
        imageWidth={850} //W/H budoud dynamicky z cmss
        imageHeight={650}
      />
      <GalleryImage
        imageSrc={"/images/testimgH.jpg"}
        imageWidth={500}
        imageHeight={700}
      />
    </Column>
  )
}

const Column = styled.div`
  flex: 25%;
  width: auto;
  display: inline-block;
  font-size: 0; // TO REMOVE INLIEN-BLOCK WHITESPACE which is caused by default

  ${breakpoints("flex", "", [{ 800: "50%" }, { 600: "100%" }])}
  ${breakpoints("max-width", "", [{ 800: "50%" }, { 600: "100%" }])}
`
export default GalleryColumn
