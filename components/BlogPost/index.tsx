import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import Image from 'components/Image'

const BlogPost = (props: { imageSource; title }) => {
  return (
    <Wrapper>
      <Image imageSrc={props.imageSource} imageWidth={400} imageHeight={300} />
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <button
          onClick={() => console.log('TODO: redirect on concrete post')}
          className={'inverted'}
        >
          Read full post
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 15px;
  max-width: 400px;
`
export default BlogPost
