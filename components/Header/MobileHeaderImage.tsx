import styled from 'styled-components'
import {} from 'utils/responsivity'
import StyledImage from 'components/General/Image'

const MobileHeaderImage = ({ image }) => {
  return (
    <MobileImage>
      <StyledImage
        imageSrc={image}
        imageWidth={2500}
        imageHeight={3000}
        fitting={'cover'}
        layout={'intrinsic'}
      />
    </MobileImage>
  )
}

const MobileImage = styled.div`
  opacity: 0.7;
  display: none;
  ${(props) => props.theme.breakpoint.M} {
    display: flex;
  }
`
export default MobileHeaderImage
