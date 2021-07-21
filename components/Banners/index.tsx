import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import Image from 'components/Image'
import MainBanner from './MainBanner'
import Content from './Content'
const Banners = () => {
  return (
    <Wrapper>
      <MainBanner />
      <MainContentMobile>
        <Content
          title={'Main banner content'}
          text={'This is content from Main image banner for mobile size'}
        />
      </MainContentMobile>
      <SmallBanners>
        <Content
          title={'Love the Wellu'}
          text={
            'Text 1 Magna deserunt excepteur laboris aliqua eiusmod adipisicing sint laborum reprehenderit reprehenderit ex ut consequat. Aliquip'
          }
        />
        <ImageWrapper>
          <Image
            imageSrc="/images/headerImg.jpg"
            imageWidth={400}
            imageHeight={400}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            imageSrc="/images/headerImg.jpg"
            imageWidth={400}
            imageHeight={400}
          />
        </ImageWrapper>
        <Content
          title={'Love the Hate'}
          text={
            'Text 1 Magna deserunt excepteur laboris aliqua eiusmod adipisicing sint laborum reprehenderit reprehenderit ex ut consequat. Aliquip'
          }
        />
      </SmallBanners>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 50px 0;
  ${breakpoints('flex-direction', '', [{ L: 'column' }])}
`

const SmallBanners = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  ${breakpoints('width', '', [{ L: '100%' }])}
  ${breakpoints(' grid-template-columns', '', [{ M: 'auto' }])}
`
const ImageWrapper = styled.div`
  ${breakpoints(' display', '', [{ M: 'none' }])}
`
const MainContentMobile = styled.div`
  ${breakpoints(' display', '', [{ M: 'none' }], 'min-width')}
`

export default Banners
