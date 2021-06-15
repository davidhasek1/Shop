import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'
import ReactMarkdown from 'react-markdown'

import Header from 'components/Header'

const Complains = ({ complains }) => {
  console.log(complains)
  console.log(`${url}${complains.Image.url}`)

  return (
    <div>
      <Header
        ownHeight={complains.ImageHeight}
        headerTitle={complains.Title}
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
    console.log('[SSG ERROR]', error)
    return {
      props: {
        complains: null,
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
export default Complains
