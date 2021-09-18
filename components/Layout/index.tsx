import styled from 'styled-components'
import { NAVBAR_HEIGHT } from 'components/Layout/Navigation'
import Navigation from 'components/Layout/Navigation'
import Newsletter from 'components/Layout/Newsletter'
import Footer from 'components/Layout/Footer'

//TODO: překopat udělat lépe
const Layout = ({ children, footerContent }) => {
  return (
    <>
      <Navigation />

      <Container>{children}</Container>
      <Newsletter />
      <Footer footer={footerContent} />
    </>
  )
}

const Container = styled.div`
  text-align: center;
  margin: auto;
  padding-top: ${NAVBAR_HEIGHT};
`
export default Layout
