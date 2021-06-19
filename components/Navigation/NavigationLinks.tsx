import { breakpoints } from 'utils/responsivity'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { ShoppingBag } from '@styled-icons/boxicons-solid/ShoppingBag'
import styled from 'styled-components'
import Link from 'next/link'

const NavigationLinks = () => {
  return (
    <NavLinks>
      <Links>
        <LinkWrapper>
          <Link href="/shop">
            <CartLink>
              <ShoppingBag size={24} />
              Shop
            </CartLink>
          </Link>
        </LinkWrapper>
        
      </Links>
    </NavLinks>
  )
}

const NavLinks = styled.div`
  width: 45%;
  ${StyledIconBase} {
    color: ${(props) => props.theme.white};
  }
  ${breakpoints('display', '', [{ 800: 'none' }])}
`
const Links = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  list-style-type: none;
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

export default NavigationLinks
