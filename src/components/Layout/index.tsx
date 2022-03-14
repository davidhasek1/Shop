import styled from 'styled-components'
import { NAVBAR_HEIGHT } from 'components/Layout/Navigation'
import Navigation from 'components/Layout/Navigation'
import Newsletter from 'components/Layout/Newsletter'
import Footer from 'components/Layout/Footer'
import { useRouter } from 'next/router'

//TODO: překopat udělat lépe

const Container = styled.div`
  min-height: 100vh;
  max-width: 1300px;
  margin: auto;
  padding-top: ${NAVBAR_HEIGHT};
`
const WizardContainer = styled.div`
  width: 100%;
`
const Layout = ({ children, footerContent }) => {
  const router = useRouter()
  const isCheckoutWizard = router.pathname === '/checkout'

  return isCheckoutWizard ? (
    <WizardContainer>{children}</WizardContainer>
  ) : (
    <>
      <Navigation />

      <Container>{children}</Container>
      <Newsletter />
      <Footer footer={footerContent} />
    </>
  )
}

export default Layout
