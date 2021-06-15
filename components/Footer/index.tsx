import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from '../../config'

import StyledImage from 'components/Image'
import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'
import Copyright from './Copyright'

const Footer = ({ footer }) => {
  console.log(footer.SocialLinks)
  return (
    <FooterContainer>
      <Content>
        <ImageWrapper>
          <StyledImage
            imageSrc={`${url}${footer.Logo.url}`}
            imageWidth={200}
            imageHeight={100}
            scaleing={false}
            fitting={'contain'}
            layout={'intrinsic'}
          />
        </ImageWrapper>

        <FooterLinks />
        <SocialLinks links={footer.SocialLinks} />
        <Copyright copyright={footer.Copyright} />
      </Content>
    </FooterContainer>
  )
}

const FooterContainer = styled.section`
  position: static;
  bottom: 0;
  width: 100%;
  height: 80px; //IF changed also change padding in Layout to smae valuw
  display: flex;

  background-color: ${(props) => props.theme.white};
  ${breakpoints('height', '', [{ 800: '100%' }])}
`
const Content = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${breakpoints('padding', '', [{ 1200: '0 20px' }])}
  ${breakpoints('flex-direction', '', [{ 800: 'column' }])}
`
const ImageWrapper = styled.div`
  font-size: 0;
  margin-right: 5px;
  ${(breakpoints('display', '', [{ 800: 'none' }]), 'min-width')}
  ${breakpoints('padding-bottom', '', [{ 800: '15px' }])}
  ${breakpoints(' margin-right', '', [{ 800: 0 }])}
`

export default Footer
