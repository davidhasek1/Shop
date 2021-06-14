import Slider from 'components/Slider'
import TopSellingItem from 'components/ProductItem'
import Heading from 'components/Heading'

const Bestsellers = () => {
  return (
    <>
      <Heading>Best selling porducts 💸</Heading>
      <Slider>
        {/* TODO: create section for bestsellers and embbed slider into  & Heading component use there*/}
        <TopSellingItem
          imageSource={'/'}
          detailID={'testid1'}
          title={'Top selling product 1'}
          shortDescription={'This is a short description about products'}
        />
        <TopSellingItem
          imageSource={'/'}
          detailID={'testid2'}
          title={'Top selling product 2'}
          shortDescription={'This is a short description about products'}
        />
        <TopSellingItem
          imageSource={'/'}
          detailID={'testid1'}
          title={'Top selling product 1'}
          shortDescription={'This is a short description about products'}
        />
        <TopSellingItem
          imageSource={'/'}
          detailID={'testid2'}
          title={'Top selling product 2'}
          shortDescription={'This is a short description about products'}
        />
      </Slider>
    </>
  )
}

export default Bestsellers
