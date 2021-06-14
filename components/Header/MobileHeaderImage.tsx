import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import StyledImage from 'components/Image'

const MobileHeaderImage = ({ image }) => {
  return (
    <MobileImage>
      <StyledImage
        imageSrc={image}
        imageWidth={2500}
        imageHeight={3500}
        scaleing={false}
        fitting={'cover'}
        layout={'intrinsic'}
      />
    </MobileImage>
  )
}

const MobileImage = styled.div`
  opacity: 0.7;
  ${breakpoints('display', '', [{ 800: 'none' }], 'min-width')}
`
export default MobileHeaderImage
