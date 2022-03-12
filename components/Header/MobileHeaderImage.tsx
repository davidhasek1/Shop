import styled from 'styled-components'
import StyledImage from 'components/General/Image'

const MobileImage = styled.div`
  opacity: 0.7;
  display: none;
  ${(props) => props.theme.breakpoint.M} {
    display: flex;
  }
`

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

export default MobileHeaderImage
