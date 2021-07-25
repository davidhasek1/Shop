import { useState } from 'react'
import styled from 'styled-components'
import { url } from 'config'
import { breakpoints } from 'utils/responsivity'
import { Facebook, Twitter } from '@styled-icons/boxicons-logos'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { DropdownsType, ShareLinksType } from 'types'
import ReactMarkdown from 'react-markdown'
import {
  AddToCartState,
  CartProductsCount,
} from 'store/actions/userCartActions'
import StyledImage from 'components/Image'
import Title from 'components/Banners/Content'
import Actions from 'components/ProdctActions'
import Dropdown from 'components/ProductDetail/Dropdowns'
import ShareProduct from 'components/ProductDetail/ShareLinks'

const productDetail = ({ product }) => {
  const dispatch = useDispatch()
  console.log(product.Images.formats.large.url)
  const addToCartHandler = () => {
    dispatch(AddToCartState('mockID'))
    dispatch(CartProductsCount())
  }
  const router = useRouter()
  const relativePath = router.asPath
  console.log('PARH', relativePath)

  const PRODUCT_URL = `${url}${relativePath}`
  const FB = `http://www.facebook.com/share.php?u=${PRODUCT_URL}`
  const TWITTER = `https://twitter.com/intent/tweet?url=${PRODUCT_URL}`
  const shareLinks: ShareLinksType = [
    {
      link: FB,
      icon: <Facebook size={15} />,
      text: 'share',
    },
    {
      link: TWITTER,
      icon: <Twitter size={15} />,
      text: 'twitter',
    },
  ]

  const mock_dropdowns: DropdownsType = [
    {
      title: 'How to use',
      content:
        'Mollit dolore excepteur mollit qui elit Lorem cillum amet esse laborum dolore. Veniam velit tempor velit esse ea mollit veniam cupidatat quis mollit. Tempor ea labore sunt fugiat deserunt cillum incididunt consectetur Lorem.',
    },
    {
      title: 'How to buy',
      content: 'Testing content',
    },
  ]

  return (
    <Container>
      <ImageWrapper>
        <StyledImage
          imageSrc={`${url}${product.Images.url}`}
          imageWidth={710}
          imageHeight={600}
        />
      </ImageWrapper>
      <ProductContent>
        <Title title={'Product #1'} />
        <Price>1000,- Kč</Price>
        <Description>
          Adipisicing eiusmod consectetur cupidatat officia minim anim Lorem.
          Enim ipsum deserunt minim ipsum Lorem. Enim aliquip culpa aute aliqua
          tempor excepteur.Voluptate id est excepteur irure amet ex anim eiusmod
          tempor deserunt. Ullamco ea dolor mollit pariatur voluptate esse sunt
          consectetur quis laborum excepteur velit officia. Anim sint elit Lorem
          fugiat laborum incididunt magna minim.
        </Description>

        <Actions
          onAddToCart={() => addToCartHandler()}
          title={'Quantity'}
          buttonTitle={'Add to cart'}
        />

        {mock_dropdowns.map((dropdown, i) => (
          <Dropdown
            key={i}
            title={dropdown.title}
            content={dropdown.content}
            isOpen={dropdown.isOpen}
          />
        ))}

        <ShareProduct links={shareLinks} />
      </ProductContent>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(`${url}/products`)
  const data = await res.json()

  const productIDs = []
  for (let key in data) {
    let stringData = data[key]._id.toString()
    productIDs.push({ params: { productID: stringData } })
  }
  console.log(res)
  return {
    paths: productIDs,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${url}/products/${params.productID}`)
    const data = await res.json()
    return { props: { product: data, fallback: true } }
  } catch (error) {
    console.log('[FETCH ERROR: Product Detail]', error)
    return {
      props: {
        products: {},
        fallback: true,
      },
    }
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 50px auto;
  ${breakpoints('flex-direction', '', [{ L: 'column' }])};
  ${breakpoints('padding', '', [{ L: '0 30px' }, { M: '0 15px' }])};
`
const ImageWrapper = styled.div`
  width: 65%;
  ${breakpoints('width', '', [{ L: '100%' }])};
`
const ProductContent = styled.div`
  width: 35%;
  margin: 0 25px;
  text-align: left;
  ${breakpoints('width', '', [{ L: '100%' }])};
  ${breakpoints('margin', '', [{ L: '20px 0' }])};
`
const Price = styled.div`
  margin: 10px 0;
  font-weight: 600;
  font-size: 18px;
`
const Description = styled.div`
  margin-top: 25px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
`

export default productDetail
