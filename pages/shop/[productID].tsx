import styled from 'styled-components'
import { url } from 'config'

import { Facebook, Twitter } from '@styled-icons/boxicons-logos'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { fetchDataById } from 'services'
import { useState } from 'react'

import { CartPayload, DropdownsType, ShareLinksType } from 'types'
import {
  setAddToCart,
  setCartItemsCount,
  setCartTotal,
  setUpdateCart,
} from 'sagaStore/cart/actions'

import StyledImage from 'components/General/Image'
import Title from 'components/Banners/Content'
import Actions from 'components/ProductDetail/ProdctActions'
import Dropdown from 'components/ProductDetail/Dropdowns'
import ShareProduct from 'components/ProductDetail/ShareLinks'

const productDetail = (props: { product: CartPayload }) => {
  const dispatch = useDispatch()
  const productID = props.product?._id

  const [quantity, setQuantity] = useState(0)

  const addToCartHandler = async () => {
    const productToCart = await fetchDataById(productID, 'products')
    dispatch(setAddToCart(productToCart))
    dispatch(setUpdateCart(productID, quantity))
    dispatch(setCartItemsCount())
    dispatch(setCartTotal())
  }
  const router = useRouter()
  const relativePath = router.asPath

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
          imageSrc={`${url}${props.product.Images.url}`}
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
          quantity={quantity}
          setQuantity={setQuantity}
          productID={productID}
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
  ${(props) => props.theme.breakpoint.L} {
    flex-direction: column;
    padding: 0 30px;
  }
`
const ImageWrapper = styled.div`
  width: 65%;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
  }
`
const ProductContent = styled.div`
  width: 35%;
  margin: 0 25px;
  text-align: left;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
    margin: 20px 0;
  }
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
