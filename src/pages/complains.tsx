import { url } from 'config'
import styled from 'styled-components'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import Header from 'components/Header'

const Wrapper = styled.div`
  padding: 25px;
  text-align: left;
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
`
const ContentContainer = styled.div`
  text-align: justify;
  margin: 0 15%;
  ${(props) => props.theme.breakpoint.M} {
    margin: 0;
  }
`

const Complains = ({ complains }) => {
  console.log(complains)
  console.log(`${url}${complains.Image.url}`)

  return (
    <div>
      <Head>
        <title>Reklamační řád</title>
      </Head>
      <Header
        isHomePage={false}
        ownHeight={complains.ImageHeight}
        title={complains.Title}
        headerImage={`${url}${complains.Image.url}`}
      />

      <Wrapper>
        <ContentContainer>
          <ReactMarkdown>{complains.Content}</ReactMarkdown>
        </ContentContainer>
      </Wrapper>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const api = await fetch(`${url}/complaints-procedure`)
    const data = await api.json()
    return {
      props: {
        complains: data,
      },
    }
  } catch (error) {
    console.log('[FETCH ERROR: Complains page]', error)
    return {
      props: {
        complains: {},
      },
    }
  }
}

export default Complains
