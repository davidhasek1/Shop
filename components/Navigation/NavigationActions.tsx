import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { openMobileMenu } from 'store/actions/handlersActions'
import { Close } from '@styled-icons/ionicons-solid/Close'
import { ShoppingBag } from '@styled-icons/boxicons-solid/ShoppingBag'
import { breakpoints } from 'utils/responsivity'

import styled from 'styled-components'
import Link from 'next/link'

import Burger from 'components/Burger'
import DropdownMenu from 'components/DropdownMenu'
import SearchBox from 'components/SearchBox'
import ItemsCounter from 'components/CartItemsCounter'

const NavigationActions = () => {
  const dispatch = useDispatch()
  const { isMobileMenuOpen } = useSelector(
    (state: RootStateOrAny) => state.handlers
  )
  const itemsCount = useSelector(
    (state: RootStateOrAny) => state.userCart.itemsCount
  )
  const cartItems = useSelector(
    (state: RootStateOrAny) => state.userCart.cartItems
  )

  return (
    <Actions>
      {/*  <SearchBox /> */}
      <LinkWrapper>
        <Link href="/cart" passHref>
          <CartLink>
            <ShoppingBag size={24} />
            Cart
            <ItemsCounter count={itemsCount} />
          </CartLink>
        </Link>
      </LinkWrapper>

      <BurgerWrapper>
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
    </Actions>
  )
}

const Actions = styled.div`
  width: 45%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${breakpoints('width', '', [{ 800: '90%' }])}
`
const BurgerWrapper = styled.div`
  margin-left: 20px;

  ${breakpoints('display', '', [{ 800: 'none' }], 'min-width')}
  ${breakpoints('margin-left', '', [{ 600: '15px' }])}
`
const CloseStyled = styled(Close)`
  color: ${(props) => props.theme.white};
`

const LinkWrapper = styled.li`
  margin: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
`
const CartLink = styled.a`
  position: relative;
`
export default NavigationActions
