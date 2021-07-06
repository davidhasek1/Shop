import { breakpoints } from 'utils/responsivity'
import { url } from 'config'
import styled from 'styled-components'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import Header from 'components/Header'

const GDPR = ({ gdpr }) => {
  console.log(gdpr)
  return (
    <div>
      <Head>
        <title>GDPR</title>
      </Head>
      
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
    console.log('[FETCH ERROR: GDPR page]', error)
    return {
      props: {
        gdpr: {},
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
  ${breakpoints('margin', '', [{ M: 0 }])};
`
export default GDPR
