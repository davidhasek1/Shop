import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'

import StyledImage from 'components/Image'
import FooterLinks from './FooterLinks'
import SocialLinks from './SocialLinks'
import Copyright from './Copyright'

const Footer = ({ footer }) => {
  console.log(footer.Links)
  return (
    <FooterContainer>
      <Content>
        <UpperSection>
          <ImageWrapper>
            <StyledImage
              imageSrc={`${url}${footer.Logo.url}`}
              imageWidth={100}
              imageHeight={100}
              scaleing={false}
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

  ${breakpoints('height', '', [{ M: '100%' }])}
`
const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
`
const UpperSection = styled.div`
  display: flex;
  justify-content: space-around;

  ${breakpoints('flex-direction', '', [{ M: 'column' }])}
`
const LowerSection = styled.div``
const ImageWrapper = styled.div`
  font-size: 0;
  display: flex;
  align-items: center;

  ${breakpoints('justify-content', '', [{ M: 'center' }])}
`

export default Footer
