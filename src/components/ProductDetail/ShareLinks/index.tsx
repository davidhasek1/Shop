import styled from 'styled-components'
import { ShareLinksType } from 'types'

const ShareProduct = (props: { links: ShareLinksType }) => {
  return (
    <ShareContainer>
      {props.links.map((link, idx) => (
        <div key={idx}>
          <a href={link.link} target="_blank">
            {link.icon} {link.text}
          </a>
        </div>
      ))}
    </ShareContainer>
  )
}
const ShareContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 25px 0;
  font-size: 12px;
  text-transform: uppercase;
`

export default ShareProduct
