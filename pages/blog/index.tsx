import { NextPage } from 'next'
import PageHeader from 'components/Header'
import BlogGrid from 'components/Layout/GridLayout'
import { mocked_blogposts } from '../../MOCK'
import BlogPost from 'components/BlogPost'

const Blog: NextPage = () => {
  const blogPosts = mocked_blogposts.map((post, idx: number) => (
    <BlogPost
      imageSource={post.imageUrl}
      title={post.title}
      isHomePage={false}
    />
  ))
  return (
    <div>
      <PageHeader
        title={'This is Title'}
        headerImage={'/images/creme.jpg'}
        isHomePage={false}
        ownHeight={400}
      >
        TODO: Title and another content for top most post in the list + button
        (CMS) <button>button</button>
      </PageHeader>
      <BlogGrid content={blogPosts} />
    </div>
  )
}

export default Blog
