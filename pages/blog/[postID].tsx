import { mocked_blogposts } from 'MOCK'
import PageHeader from 'components/Header'

import styled from 'styled-components'

const BlogPost = ({ post }) => {
  return (
    <div>
      <PageHeader
        isHomePage={false}
        headerImage={'/images/testimgH.jpg'}
        ownHeight={300}
      />
      <h1>{post.title}</h1>
      <PostContent>Content of the blog post</PostContent>
    </div>
  )
}

export const getStaticPaths = () => {
  const dataFromApi = mocked_blogposts

  const postIDs = []

  for (let key in dataFromApi) {
    let id = dataFromApi[key].id.toString()
    postIDs.push({ params: { postID: id } })
  }

  return {
    paths: postIDs,
    fallback: false,
  }
}

export const getStaticProps = ({ params }) => {
  //get data from cms
  const dataFromApi = mocked_blogposts[0]

  return {
    props: {
      post: dataFromApi,
    },
  }
}

const PostContent = styled.div`
  max-width: 1200px;
  margin: auto;
`
export default BlogPost
