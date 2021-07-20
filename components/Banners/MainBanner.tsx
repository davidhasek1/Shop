import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import Image from 'components/Image'
import Content from './Content'

const MainBanner = () => {
  return (
    <Banner>
      <Image imageSrc="/images/creme.jpg" imageWidth={800} imageHeight={800}>
        <Content
          title={'Hello This is me Title'}
          text={'TExtimport Content from TExtimport Content from '}
        />
      </Image>
    </Banner>
  )
}

const Banner = styled.div`
  width: 100%;
  ${breakpoints('width', '', [{ L: '100%' }])}
`
export default MainBanner
