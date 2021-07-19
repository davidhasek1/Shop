import { useRouter } from 'next/router'
import styled from 'styled-components'
import { NAVBAR_HEIGHT } from 'components/Navigation'
import Navigation from 'components/Navigation'
import ShopNavigation from 'components/ShopNavigation'
import Newsletter from 'components/Newsletter'
import Footer from 'components/Footer'

//TODO: překopat udělat lépe
const Layout = ({ children, footerContent }) => {
  const router = useRouter()
  const isShop = router.pathname === '/shop'
  const isFav = router.pathname === '/shop/sale'
  const isSale = router.pathname === '/shop/favourites'

  const shopNav = isShop || isFav || isSale ? <ShopNavigation /> : null

  return (
    <>
      <Navigation />
      {shopNav}
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
