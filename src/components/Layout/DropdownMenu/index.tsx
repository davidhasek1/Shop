import { StyledIconBase } from '@styled-icons/styled-icon'
import styled from 'styled-components'
import Link from 'next/link'

const DropdownMenu = ({ links }) => {
  return (
    <DropdownWrapper>
      <Links>
        {links.map((link, idx) => (
          <StyledLink key={idx}>
            <Link href={link.href}>
              <Anchor>{link.content}</Anchor>
            </Link>
          </StyledLink>
        ))}
      </Links>
    </DropdownWrapper>
  )
}

const DropdownWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.text};
  ${(props) => props.theme.breakpoint.XL} {
    display: none;
  }
  ${(props) => props.theme.breakpoint.L} {
    display: flex;
  }
`
const Links = styled.div`
  text-align: left;
  cursor: pointer;
  padding: 20px;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
  }
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
