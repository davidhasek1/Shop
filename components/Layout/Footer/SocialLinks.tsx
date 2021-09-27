import styled from 'styled-components'

import { StyledIconBase } from '@styled-icons/styled-icon'
import {
  FacebookCircle,
  Twitter,
  Instagram,
} from '@styled-icons/boxicons-logos'

const SocialLinks = ({ links }) => {
  return (
    <Socials>
      <a target="_blank" href={`http://${links.Facebook}/`}>
        <FacebookCircle size={30} />
      </a>
      <a target="_blank" href={`http://${links.Twitter}/`}>
        <Twitter size={30} />
      </a>
      <a target="_blank" href={`http://${links.Instagram}/`}>
        <Instagram size={30} />
      </a>
    </Socials>
  )
}

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${StyledIconBase} {
    color: ${(props) => props.theme.fade3};
    margin: 0 15px;
    &:hover {
      color: ${(props) => props.theme.black};
    }
  }
  ${(props) => props.theme.breakpoint.M} {
    padding: 20px 0;
  }
`

export default SocialLinks
