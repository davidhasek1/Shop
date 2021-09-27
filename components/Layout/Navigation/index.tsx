import styled from 'styled-components'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import NavigationLinks from './NavigationLinks'
import StyledImage from 'components/General/Image'
import DropdownMenu from 'components/Layout/DropdownMenu'
import { getOpenMobileMenu } from 'sagaStore/selectors'
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart'

export const NAVBAR_HEIGHT = '60px'
export type NavLinksType = {
  href: string
  content?: string | any
  icon?: any
  image?: any
}

const navlinks: NavLinksType[] = [
  { href: '/shop', content: 'Shop' },
  { href: '/our-story', content: 'Our Story' },
  { href: '/blog', content: 'Blog' },
  { href: '/gift-card', content: 'Gift Card' },
  { href: '/account/login', content: 'Account' },
]

const Navigation = () => {
  const isMobileMenuOpen = useSelector(getOpenMobileMenu)

  return (
    <NavWrapper>
      <Container>
        <NavigationLinks navlinks={navlinks} />
      </Container>
      {isMobileMenuOpen ? <DropdownMenu links={navlinks} /> : null}
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 20;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 4px 10px -6px ${(props) => props.theme.fade2};
  color: ${(props) => props.theme.text};
  font-weight: 300;

  ${(props) => props.theme.breakpoint.M} {
    font-size: 14px;
  }
`
const Container = styled.div`
  height: ${NAVBAR_HEIGHT};
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.breakpoint.XL} {
    padding: 0 15px;
  }
`
const ImageLink = styled.a`
  font-size: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default Navigation
