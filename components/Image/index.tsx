import styled, { css } from 'styled-components'
import Image from 'next/image'
import { breakpoints } from '../../utils/responsivity'

const ImageComponent = (props) => {
  const {
    imageSrc,
    imageWidth,
    imageHeight,
    scaleing,
    fitting,
    layout,
    children,
  } = props
  return (
    //TODO:
    //@ts-ignore
    <ImageWrapper isScale={scaleing}>
      <Content>{children}</Content>
      <ImageStyled
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        imagefit={fitting}
        /* @ts-ignore */
        layout={layout} //https://nextjs.org/docs/api-reference/next/image#layout
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
  ${breakpoints('display', '', [{ M: 'none' }])};
`
export default ImageComponent
