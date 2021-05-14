import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import Image from "next/image"

const ImageComponent = ({ imageSrc, imageWidth, imageHeight }) => {
  return (
    <ImageWrapper>
      <ImageStyled src={imageSrc} width={imageWidth} height={imageHeight} />
    </ImageWrapper>
  )
}

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
export default ImageComponent
