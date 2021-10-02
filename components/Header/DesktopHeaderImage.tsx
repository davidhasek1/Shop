import styled from 'styled-components'

import StyledImage from 'components/General/Image'

const DesktopHeaderImage = ({ image }) => {
  return (
    <DesktopImage>
      <StyledImage
        imageSrc={image}
        imageWidth={2500}
        imageHeight={1050}
        fitting={'cover'}
        layout={'intrinsic'}
      />
    </DesktopImage>
  )
}

const DesktopImage = styled.div`
  opacity: 0.7;
  ${(props) => props.theme.breakpoint.M}  {
    display: none;
  }
`
export default DesktopHeaderImage
