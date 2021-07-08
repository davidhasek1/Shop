import { breakpoints } from 'utils/responsivity'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'
import Burger from 'components/Burger'
import DropdownMenu from 'components/DropdownMenu'
import { openMobileMenu } from 'store/actions/handlersActions'
import { Close } from '@styled-icons/ionicons-solid/Close'
import { Cart } from '@styled-icons/ionicons-outline/Cart'

const NavigationLinks = ({ navlinks, flexPosition }) => {
  const dispatch = useDispatch()
  const { isMobileMenuOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  )

  console.log(navlinks)
  return (
    <NavLinks>
      <Links flexPosition={flexPosition}>
        {navlinks.map((link, idx) => (
          <LinkWrapper>
            <Link key={idx} href={link.href}>
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
              <CartStyled size={30} />
            </AnchorLink>
          </Link>
        </CartLink>
      </Links>
      <BurgerWrapper flexPosition={flexPosition}>
        {isMobileMenuOpen ? (
          <CloseStyled
            onClick={() => dispatch(openMobileMenu(false))}
            size={35}
          />
        ) : (
          <Burger onClick={() => dispatch(openMobileMenu(true))} />
        )}
      </BurgerWrapper>
      {isMobileMenuOpen ? <DropdownMenu /> : null}
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
const CartStyled = styled(Cart)`
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')}
`
const BurgerWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  height: 100%;
  display: ${({ flexPosition }) => flexPosition === 'right' && 'none'};
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')}
`
const CloseStyled = styled(Close)`
  color: ${(props) => props.theme.white};
`

export default NavigationLinks
