import { NextPage } from 'next'
import PageHeader from 'components/Header/index'

const OurStory: NextPage = () => {
  return (
    <div>
      <PageHeader
        isHomePage={false}
        headerImage={'/images/testimgW.jpg'}
        title={'title'}
        ownHeight={500}
      />
      This page can be whole editable form CMS
    </div>
  )
}

export default OurStory
