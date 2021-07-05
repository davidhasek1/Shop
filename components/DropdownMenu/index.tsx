import { breakpoints } from 'utils/responsivity'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Shop } from '@styled-icons/bootstrap'
import styled from 'styled-components'
import Link from 'next/link'

const DropdownMenu = () => {
  return (
    <DropdownWrapper>
      <Links>
        <Link href="/shop">
          <StyledLink>
            <Shop size={25} />
            Shop
          </StyledLink>
        </Link>
      </Links>
    </DropdownWrapper>
  )
}

const DropdownWrapper = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  width: 100%;

  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.text};
  box-shadow: 0px 3px 11px 0px #777777;
  z-index: 2;
  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
  }
  ${breakpoints('width', '', [{ 800: '50%' }, { 600: '90vw' }])}
  ${breakpoints('display', '', [{ 800: 'none' }], 'min-width')}
`
const Links = styled.div`
  text-align: left;
  cursor: pointer;
`
const StyledLink = styled.div`
  padding: 10px;
`

export default DropdownMenu
