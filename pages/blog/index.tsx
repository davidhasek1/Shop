import { NextPage } from 'next'
import PageHeader from 'components/Header'
import BlogGrid from 'components/Layout/GridLayout'
import { mocked_blogposts } from '../../MOCK'
import BlogPost from 'components/BlogPost'
import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const Blog: NextPage = () => {
  const blogPosts = mocked_blogposts.map((post, idx: number) => (
    <BlogPost
      key={idx}
      imageSource={post.imageUrl}
      title={post.title}
      isHomePage={false}
    />
  ))
  return (
    <div>
      <PageHeader
        title={'This is Title'} //post title
        headerImage={'/images/testimgW.jpg'} //image of the blog post
        isHomePage={false}
        ownHeight={400}
      >
        <MainPostContent>
          TODO: Title and another content for top most post in the list + button
          (CMS)
          <MainPostButtonWrapper>
            <MainPostButton>button</MainPostButton>
          </MainPostButtonWrapper>
        </MainPostContent>
      </PageHeader>
      <BlogGrid isBlogGrid={true} content={blogPosts} />
    </div>
  )
}

const MainPostContent = styled.div`
  ${breakpoints('text-align', '', [{ L: 'left' }])}
`
const MainPostButtonWrapper = styled.div`
  margin-top: 15px;
  ${breakpoints('text-align', '', [{ L: 'center' }, { M: 'right' }])}
`
const MainPostButton = styled.button`
  border: 2px solid ${(props) => props.theme.black};
  background: transparent !important;
  color: ${(props) => props.theme.black};
  &:hover {
    background: ${(props) => props.theme.black} !important;
    color: ${(props) => props.theme.white};
  }
`

export default Blog
