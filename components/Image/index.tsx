import styled, { css } from "styled-components"
import { breakpoints } from "utils/responsivity"
import Image from "next/image"

const ImageComponent = (props) => {
  const { imageSrc, imageWidth, imageHeight, scaleing, fitting } = props
  return (
    //TODO:
    //@ts-ignore
    <ImageWrapper isScale={scaleing}>
      {/* @ts-ignore */}
      <ImageStyled
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        imagefit={fitting}
      />
    </ImageWrapper>
  )
}

type ImageProps = {
  isScale: boolean
  imagefit: string
}

const ImageWrapper = styled.div<ImageProps>`
  transition: all 0.2s ease-in-out;
  font-size: 0;
  &:hover {
    transform: ${({ isScale }) =>
      isScale
        ? css`
      scale(1.125);
      z-index: 50;
    `
        : css`
      scale('none');
    `};
  }
`
const ImageStyled = styled(Image)<ImageProps>`
  object-fit: ${({ imagefit }) => imagefit};
  opacity: 1;
`
export default ImageComponent
