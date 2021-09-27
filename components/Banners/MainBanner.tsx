import styled from 'styled-components'
import Image from 'components/General/Image'
import Content from './Content'

const MainBanner = () => {
  return (
    <Banner>
      <Image
        imageSrc="/images/creme.jpg"
        imageWidth={800}
        imageHeight={800}
        layout={'responsive'}
      >
        <Content
          isBanner={true}
          title={'Hello This is me Title'}
          text={'TExtimport Content from TExtimport Content from '}
        />
      </Image>
    </Banner>
  )
}

const Banner = styled.div`
  width: 100%;
`
export default MainBanner
