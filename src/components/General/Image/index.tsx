import styled, { css } from 'styled-components'
import Image from 'next/image'

const ImageComponent = (props: {
  imageSrc: string
  imageWidth: number | string
  imageHeight: number | string
  scaleing?: number
  fitting?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill'
  children?: any
}) => {
  return (
    //TODO:
    //@ts-ignore
    <ImageWrapper isScale={props.scaleing}>
      <ImageStyled
        src={props.imageSrc}
        width={props.imageWidth}
        height={props.imageHeight}
        imagefit={props.fitting}
        /* @ts-ignore */
        layout={props.layout} //https://nextjs.org/docs/api-reference/next/image#layout
      />
    </ImageWrapper>
  )
}

type ImageProps = {
  isScale?: boolean
  imagefit?: string
}

const ImageWrapper = styled.div<ImageProps>`
  position: relative;
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
  object-fit: ${({ imagefit }) => (imagefit ? imagefit : 'cover')};
  opacity: 1;
`
const Content = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  z-index: 1;
  ${(props) => props.theme.breakpoint.M} {
    display: none;
  }
`
export default ImageComponent
