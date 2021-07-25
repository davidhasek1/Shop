import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import Link from 'next/link'

//TODO: Put links (href + title) into CMS and Iterate through
const FooterLinks = ({ links }) => {
  return (
    <Links>
      {links.map((link) => (
        <Item key={link._id}>
          <Link href={link.Link}>{link.Title}</Link>
        </Item>
      ))}
    </Links>
  )
}
const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  color: ${(props) => props.theme.fade3};
  font-weight: 300;

  ${breakpoints('margin', '', [{ M: 'auto' }])};
`
const Item = styled.li`
  padding: 5px;
  &:hover {
    color: ${props => props.theme.black};
  }
`
export default FooterLinks
