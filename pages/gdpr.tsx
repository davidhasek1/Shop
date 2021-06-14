import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { url } from 'config'
import ReactMarkdown from 'react-markdown'

const GDPR = ({ gdpr }) => {
  console.log(gdpr)
  return (
    <div>
      <h1>{gdpr.Title}</h1>
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
