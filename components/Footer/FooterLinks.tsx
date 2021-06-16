import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import Link from 'next/link'

//TODO: Put links (href + title) into CMS and Iterate through
const FooterLinks = () => {
  return (
    <Links>
      <Item>
        <Link href="/gdpr">GDPR</Link>
      </Item>
      <Item>
        <Link href="/complains">Reklamační řád</Link>
      </Item>
      <Item>
        <Link href="/contact">Contact</Link>
      </Item>
    </Links>
  )
}
const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  color: #bfbfbf;
  font-weight: 300;

  ${breakpoints('margin', '', [{ 600: 'auto' }])};
`
const Item = styled.li`
  padding: 5px;
  &:hover {
    color: #808080;
  }
`
export default FooterLinks
