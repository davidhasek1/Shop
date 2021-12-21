import styled from 'styled-components'

import { url } from 'config'

import StyledImage from 'components/General/Image'
import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'
import Copyright from './Copyright'

const Footer = ({ footer }) => {
  console.log(footer.Links)
  console.log(footer.SocialLinks)
  return (
    <FooterContainer>
      <Content>
        <UpperSection>
          <ImageWrapper>
            <StyledImage
              imageSrc={`${url}${footer.Logo.url}`}
              imageWidth={100}
              imageHeight={100}
              fitting={'contain'}
              layout={'intrinsic'}
            />
          </ImageWrapper>

          <SocialLinks links={footer.SocialLinks} />
          <FooterLinks links={footer.Links} />
        </UpperSection>

        <LowerSection>
          <Copyright copyright={footer.Copyright} />
        </LowerSection>
      </Content>
    </FooterContainer>
  )
}

const FooterContainer = styled.section`
  position: static;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: ${(props) => props.theme.white};
  box-shadow: inset 0px 8px 10px -6px ${(props) => props.theme.fade1};
  ${(props) => props.theme.breakpoint.M} {
    height: 100%;
  }
`
const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
`
const UpperSection = styled.div`
  display: flex;
  justify-content: space-around;
  ${(props) => props.theme.breakpoint.M} {
    flex-direction: column;
  }
`
const LowerSection = styled.div``
const ImageWrapper = styled.div`
  font-size: 0;
  display: flex;
  align-items: center;
  ${(props) => props.theme.breakpoint.M} {
    justify-content: center;
  }
`

export default Footer
