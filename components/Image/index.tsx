import styled, { css } from "styled-components"
import { breakpoints } from "utils/responsivity"
import Image from "next/image"

const ImageComponent = ({ imageSrc, imageWidth, imageHeight, scaleing }) => {
  return (
    <ImageWrapper isScale={scaleing}>
      <ImageStyled src={imageSrc} width={imageWidth} height={imageHeight} />
    </ImageWrapper>
  )
}

type ImageProps = {
  isScale: boolean
}

const ImageWrapper = styled.div<ImageProps>`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: ${({ isScale }) =>
    isScale ? 
    css`
      scale(1.125);
      z-index: 50;
    ` : 
    css`
      scale('none');
    `};
  }
`
const ImageStyled = styled(Image)`
  object-fit: cover;
  opacity: 1;
`
export default ImageComponent
