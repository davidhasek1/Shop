import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import Image from 'components/General/Image'

const BlogPost = (props: {
  imageSource: any
  title: string
  isHomePage: boolean
}) => {
  return (
    <Wrapper isHomePage={props.isHomePage}>
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
const Wrapper = styled.div<{ isHomePage?: boolean }>`
  margin: 15px;
  max-width: ${({ isHomePage }) => (isHomePage ? '400px' : '250px')};
`
export default BlogPost
