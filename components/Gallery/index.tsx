import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'

import Slider from 'components/General/Slider'
import StyledImage from '../General/Image'
import Heading from 'components/General/Heading'

const Gallery = ({ title, images }) => {
  console.log(images)
  let ImagesArray = images.Images

  return (
    <SectionWrapper>
      <Heading>{title}</Heading>
      <GalleryWrapper>
        <SliderWrapper>
          <Slider>
            {ImagesArray.map((image) => (
              <StyledImage
                key={image._id}
                imageSrc={`${url}${image.formats.large.url}`}
                imageWidth={images.width}
                imageHeight={images.height}
                scaleing={true} //TODO do cms
                fitting={'cover'} //TODO do cms
                layout={'fixed'} //TODO do cms
              />
            ))}
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
  ${breakpoints('display', '', [{ XL: 'none' }])}
`
const SliderWrapper = styled.div``

export default Gallery
