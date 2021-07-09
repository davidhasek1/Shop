import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import Link from 'next/link'
import { useSelector, RootStateOrAny } from 'react-redux'
import NavigationLinks from './NavigationLinks'
import StyledImage from 'components/Image'
import DropdownMenu from 'components/DropdownMenu'

export type NavLinksType = {
  href: string
  caption: string
  icon: any
}
export type NavSection = {
  left: Array<NavLinksType>
  right: Array<NavLinksType>
}

const navlinks: NavSection = [
  {
    left: [
      { href: '/shop', caption: 'Shop' },
      { href: '/story', caption: 'Our Story' },
      { href: '/blog', caption: 'Blog' },
      { href: '/giftcard', caption: 'Gift Card' },
    ],
  },

  {
    right: [{ href: '/account', caption: 'Account' }],
  },
]

const Navigation = () => {
  const { isMobileMenuOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  )
  return (
    <NavWrapper>
      <Container>
        <NavigationLinks navlinks={navlinks[0].left} flexPosition={'left'} />
        <Link href="/" passHref>
          <ImageLink>
            <StyledImage
              imageSrc={'/images/wellu.png'}
              imageWidth={200}
              imageHeight={150}
              scaleing={false}
              fitting={'contain'}
              layout={'intrinsic'}
            />
          </ImageLink>
        </Link>
        <NavigationLinks navlinks={navlinks[1].right} flexPosition={'right'} />
      </Container>
      {isMobileMenuOpen ? <DropdownMenu links={navlinks} /> : null}
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 4px 10px -6px ${(props) => props.theme.fade2};
  color: ${(props) => props.theme.text};
  font-weight: 300;
`
const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  ${breakpoints('padding', '', [{ XL: '0 15px' }])}
`
const ImageLink = styled.a`
  font-size: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default Navigation
