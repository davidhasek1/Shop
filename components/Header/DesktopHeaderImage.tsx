import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import StyledImage from "components/Image"

const DesktopHeaderImage = () => {
  return (
    <DesktopImage>
      <StyledImage
        imageSrc={"/images/headerImg.jpg"}
        imageWidth={2500}
        imageHeight={1050}
        scaleing={false}
        fitting={"cover"}
        layout={"intrinsic"}
      />
    </DesktopImage>
  )
}

const DesktopImage = styled.div`
  opacity: 0.7;
  ${breakpoints("display", "", [{ 800: "none" }])}
`
export default DesktopHeaderImage
