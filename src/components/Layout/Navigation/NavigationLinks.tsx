import styled from 'styled-components'
import Link from 'next/link'
import { NavLinksType } from 'types'
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart'

import BurgerMenu from 'components/Layout/Navigation/BurgerMenu'
import PriceSummary from 'components/CartSummaryIndicator'
import StyledImage from 'components/General/Image'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const DynamicLinks = styled.div`
  display: flex;
  gap: 25px;

  a {
    height: 100%;
    display: flex;
    align-items: center;
    :hover {
      font-weight: 600;
    }
  }

  ${(props) => props.theme.breakpoint.M} {
    display: none;
  }
`
const CartLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const NavigationLinks = (props: { navlinks: NavLinksType[] }) => {
  return (
    <Wrapper>
      <BurgerMenu />

      <Link href="/">
        <Logo>
          <StyledImage
            imageSrc={'/images/wellu.png'}
            imageWidth={100}
            imageHeight={40}
            fitting={'contain'}
            layout={'fixed'}
          />
        </Logo>
      </Link>
      <DynamicLinks>
        {props.navlinks.map((link: NavLinksType, idx: number) => (
          <Link key={idx} href={link.href} passHref>
            <a>{link.content}</a>
          </Link>
        ))}
      </DynamicLinks>
      <Link href="/cart">
        <CartLink>
          <ShoppingCart size={30} />
          <PriceSummary />
        </CartLink>
      </Link>
    </Wrapper>
  )
}

export default NavigationLinks
