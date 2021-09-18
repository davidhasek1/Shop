import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { BlogPost, BlogPosts } from 'types'
import Post from 'components/BlogPost'

const BlogSection = (props: {
  blogContent: BlogPosts
  isHomePage: boolean
}) => {
  return (
    <Wrapper>
      <WrapperTitle>
        <h2>Our Blog</h2>
      </WrapperTitle>

      <Cotainer>
        {props.blogContent.map(
          (item: BlogPost, idx: number) =>
            idx < 2 && (
              <PostWrapper key={idx}>
                <Post
                  postID={idx} //TODO: mocked ID
                  isHomePage={props.isHomePage}
                  imageSource={item.imageUrl}
                  title={item.title}
                />
              </PostWrapper>
            )
        )}
      </Cotainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 100px auto;
`
const WrapperTitle = styled.div`
  padding-top: 20px;
`
const Cotainer = styled.div`
  display: flex;
  justify-content: center;
  ${breakpoints('flex-direction', '', [{ M: 'column' }])}
  ${breakpoints('align-items', '', [{ M: 'center' }])}
`
const PostWrapper = styled.div``

export default BlogSection
