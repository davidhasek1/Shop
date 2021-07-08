import { useRouter } from 'next/router'
import styled from 'styled-components'

import Navigation from 'components/Navigation'
import ShopNavigation from 'components/ShopNavigation'
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
      <Footer footer={footerContent} />
    </>
  )
}

const Container = styled.div`
  text-align: center;
  margin: auto;
`
export default Layout
