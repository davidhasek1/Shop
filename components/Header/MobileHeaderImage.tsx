import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import StyledImage from "components/Image"

const MobileHeaderImage = () => {
  return (
    <MobileImage>
      <StyledImage
        imageSrc={"/images/headerImg.jpg"}
        imageWidth={2500}
        imageHeight={3500}
        scaleing={false}
        fitting={"cover"}
      />
    </MobileImage>
  )
}

const MobileImage = styled.div`
  opacity: 0.7;
  ${breakpoints("display", "", [{ 800: "none" }], "min-width")}
`
export default MobileHeaderImage
