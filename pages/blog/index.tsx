import { NextPage } from 'next'
import PageHeader from 'components/Header'

const Blog: NextPage = () => {
  return (
    <div>
      <PageHeader
        title={'This is Title'}
        headerImage={'/images/creme.jpg'}
        isHomePage={false}
        ownHeight
      >
        Page header children content with <button>button</button>{' '}
      </PageHeader>
    </div>
  )
}

export default Blog
