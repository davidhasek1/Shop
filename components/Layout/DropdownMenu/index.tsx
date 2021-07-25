import { breakpoints } from 'utils/responsivity'
import { StyledIconBase } from '@styled-icons/styled-icon'
import styled from 'styled-components'
import Link from 'next/link'

const DropdownMenu = ({ links }) => {
  return (
    <DropdownWrapper>
      <Links>
        {links[0].left.map((link, idx) => (
          <StyledLink key={idx}>
            <Link href={link.href}>
              <Anchor>{link.caption}</Anchor>
            </Link>
          </StyledLink>
        ))}
        {links[1].right.map((link, idx) => (
          <StyledLinkLast key={idx}>
            <Link href={link.href}>
              <Anchor>{link.caption}</Anchor>
            </Link>
          </StyledLinkLast>
        ))}
      </Links>
    </DropdownWrapper>
  )
}

const DropdownWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.text};
  ${breakpoints('display', '', [{ L: 'none' }], 'min-width')}
`
const Links = styled.div`
  text-align: left;
  cursor: pointer;
  padding: 20px;
  ${breakpoints('width', '', [{ L: '100%' }, { 600: '90vw' }])}
`
const StyledLink = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.fade1};
`
const StyledLinkLast = styled(StyledLink)`
  border-bottom: none;
`
const Anchor = styled.a`
  display: flex;
  align-items: stretch;
  padding: 15px 0;
`

export default DropdownMenu
