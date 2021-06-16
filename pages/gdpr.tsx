import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'
import ReactMarkdown from 'react-markdown'

import Header from 'components/Header'

const GDPR = ({ gdpr }) => {
  console.log(gdpr)
  return (
    <div>
      <Header
        ownHeight={gdpr.ImageHeight}
        headerTitle={gdpr.Title}
        headerImage={`${url}${gdpr.Image.url}`}
      />
      <Wrapper>
        <ContentContainer>
          <ReactMarkdown>{gdpr.Content}</ReactMarkdown>
        </ContentContainer>
      </Wrapper>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const api = await fetch(`${url}/gdpr`)
    const data = await api.json()
    return {
      props: {
        gdpr: data,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.log('[SSG ERROR]', error)
    return {
      props: {
        gdpr: null,
      },
    }
  }
}

const Wrapper = styled.div`
  margin: 25px 0;
  padding: 25px;
  text-align: left;
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
`
const ContentContainer = styled.div`
  text-align: justify;
  margin: 0 15%;
  ${breakpoints('margin', '', [{ 600: 0 }])};
`
export default GDPR
