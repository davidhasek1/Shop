import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import Image from 'components/General/Image'
import { useRouter } from 'next/router'

const BlogPost = (props: {
  postID: number
  imageSource: any
  title: string
  isHomePage: boolean
}) => {
  const router = useRouter()

  return (
    <Wrapper isHomePage={props.isHomePage}>
      <Image imageSrc={props.imageSource} imageWidth={400} imageHeight={300} />
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <button
          onClick={() => router.push(`/blog/${props.postID}`)}
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
