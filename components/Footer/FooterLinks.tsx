import { useDispatch } from 'react-redux'
import { breakpoints } from 'utils/responsivity'
import styled from 'styled-components'
import Link from 'next/link'

const FooterLinks = () => {
  return (
    <Links>
      <Link href="/gdpr">GDPR</Link>
      <Link href="/complains">Reklamační řád</Link>
      <Link href="/contact">Contact</Link>
    </Links>
  )
}
const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  ${breakpoints('order', '', [{ 800: 1 }])}
  ${breakpoints('justify-content', '', [{ 800: 'space-around' }])}
  ${breakpoints('flex-direction', '', [{ 600: 'column' }])}
  ${breakpoints('padding', '', [{ 800: '20px 0' }])}
`
export default FooterLinks
