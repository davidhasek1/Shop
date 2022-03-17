import styled from 'styled-components'
import Link from 'next/link'
import { NavLinksType } from 'types'
import { ShoppingBag } from '@styled-icons/boxicons-regular/ShoppingBag'

import BurgerMenu from 'components/Layout/Navigation/BurgerMenu'
import PriceSummary from 'components/CartSummaryIndicator'
import StyledImage from 'components/General/Image'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
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
  border: 2px solid ${(props) => props.theme.black};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.black};
    box-shadow: 0 0 0 3px ${(props) => props.theme.black};
  }
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
          <ShoppingBag size={30} />
        </CartLink>
      </Link>
    </Wrapper>
  )
}

export default NavigationLinks
