import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import Link from 'next/link'
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart'
import { RootStateOrAny, useSelector } from 'react-redux'
import BurgerMenu from 'components/BurgerMenu'
import PriceSummary from 'components/CartSummaryIndicator'

const NavigationLinks = ({ navlinks, flexPosition }) => {
  const itemsCount = useSelector(
    (state: RootStateOrAny) => state.userCart.itemsCount
  )
  return (
    <NavLinks>
      <Links flexPosition={flexPosition}>
        {navlinks.map((link, idx) => (
          <LinkWrapper key={idx}>
            <Link href={link.href}>
              <AnchorLink>
                {link.caption}
                {link.icon}
              </AnchorLink>
            </Link>
          </LinkWrapper>
        ))}
        <CartLink flexPosition={flexPosition}>
          <Link href="/cart" passHref>
            <AnchorLink>
              <CartText>Cart</CartText>
              {itemsCount > 0 && <PriceSummary />}
              <CartStyled size={30} />
            </AnchorLink>
          </Link>
        </CartLink>
      </Links>

      <BurgerMenu flexPosition={flexPosition} />
    </NavLinks>
  )
}

type Props = {
  flexPosition: 'left' | 'right'
}

const NavLinks = styled.div`
  width: 100%;
`
const Links = styled.ul<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ flexPosition }) =>
    flexPosition === 'left' ? 'flex-start' : 'flex-end'};
  margin: 0;
  height: 100%;
  padding: 0;
  list-style-type: none;
  ${({ flexPosition }) =>
    flexPosition === 'left' && breakpoints('display', '', [{ L: 'none' }])};
`
const LinkWrapper = styled.li`
  display: flex;
  ${breakpoints('display', '', [{ L: 'none' }])}
`
const AnchorLink = styled.a`
  position: relative;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  ${breakpoints('padding', '', [{ L: '0' }])}
`
const CartLink = styled.div<Props>`
  display: ${({ flexPosition }) =>
    flexPosition === 'left' ? 'none' : 'block'};
`
const CartText = styled.span`
  ${breakpoints('display', '', [{ L: 'none' }])}
`
const CartStyled = styled(ShoppingCart)`
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')}
`

export default NavigationLinks
