import styled from 'styled-components'
import Image from 'components/General/Image'
import MainBanner from './MainBanner'
import Content from './Content'
const Banners = () => {
  return (
    <Wrapper>
      <MainBanner />
      <MainContentMobile>
        <Content
          isBanner={true}
          title={'Main banner content'}
          text={'This is content from Main image banner for mobile size'}
        />
      </MainContentMobile>
      <SmallBanners>
        <Content
          isBanner={true}
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
            layout={'responsive'}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            imageSrc="/images/headerImg.jpg"
            imageWidth={400}
            imageHeight={400}
            layout={'responsive'}
          />
        </ImageWrapper>
        <Content
          isBanner={true}
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
  ${(props) => props.theme.breakpoint.L} {
    flex-direction: column;
  }
`

const SmallBanners = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
  }
  ${(props) => props.theme.breakpoint.M} {
    grid-template-columns: auto;
  }
`
const ImageWrapper = styled.div`
  ${(props) => props.theme.breakpoint.M} {
    display: none;
  }
`
const MainContentMobile = styled.div`
  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.L} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.M} {
    display: block;
  }
`

export default Banners
