import styled from 'styled-components'
import { NAVBAR_HEIGHT } from 'components/Layout/Navigation'
import Navigation from 'components/Layout/Navigation'
import Newsletter from 'components/Layout/Newsletter'
import Footer from 'components/Layout/Footer'
import { useRouter } from 'next/router'

//TODO: překopat udělat lépe
const Layout = ({ children, footerContent }) => {
  const router = useRouter()
  const isCheckoutWizard = router.pathname === '/checkout'

  return isCheckoutWizard ? (
    <Container isWizard={isCheckoutWizard}>{children}</Container>
  ) : (
    <>
      <Navigation />

      <Container isWizard={isCheckoutWizard}>{children}</Container>
      <Newsletter />
      <Footer footer={footerContent} />
    </>
  )
}

const Container = styled.div<{ isWizard: boolean }>`
  min-height: 100vh;
  text-align: center;
  margin: auto;
  padding-top: ${({ isWizard }) => (isWizard ? 0 : NAVBAR_HEIGHT)};
`
export default Layout
