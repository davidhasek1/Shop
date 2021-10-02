import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { url } from 'config'

import { Facebook, Twitter } from '@styled-icons/boxicons-logos'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { DropdownsType, ShareLinksType } from 'types'
import {
  setAddToCart,
  setCartItemsCount,
  setCartTotal,
  setUpdateCart,
} from '../sagaStore/actions'
import ReactMarkdown from 'react-markdown'

import StyledImage from 'components/General/Image'
import Title from 'components/Banners/Content'
import Actions from 'components/ProductDetail/ProdctActions'
import Dropdown from 'components/ProductDetail/Dropdowns'
import ShareProduct from 'components/ProductDetail/ShareLinks'
import { fetchDataById } from 'services'

const giftCardPage = (props: { giftCards }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)
  const [giftID, setGiftID] = useState(props.giftCards[0].id || '')
  const [giftCardData, setGiftCardData] = useState(props.giftCards[0])

  const addToCartHandler = async () => {
    dispatch(setAddToCart(giftCardData)) //get ID from BE
    dispatch(setUpdateCart(giftCardData.id, quantity)) //state quantity
    dispatch(setCartItemsCount())
    dispatch(setCartTotal())
  }
  useEffect(() => {
    const updatePage = async () => {
      const updatePageData = await fetchDataById(giftID, 'gift-cards')
      setGiftCardData(updatePageData)
    }
    updatePage()
  }, [giftID])

  console.log('[COntent update]', giftCardData)
  const selectValueHandle = (e) => {
    setGiftID(e.target.value)
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
          imageSrc={`${url}${giftCardData.Images.url}`}
          imageWidth={710}
          imageHeight={600}
        />
      </ImageWrapper>
      <ProductContent>
        <Title title={giftCardData.Title} />
        <Price>{giftCardData.Price} Kč</Price>
        <Description>
          <ReactMarkdown children={giftCardData.Description} />
        </Description>

        <GiftCardWrapper>
          <span>DENOMINATIONS</span>
          <StyledSelect onChange={selectValueHandle}>
            {props.giftCards.map((data) => (
              <option key={data.id} value={data.id}>
                {data.Price}
              </option>
            ))}
          </StyledSelect>
        </GiftCardWrapper>

        <Actions
          onAddToCart={() => addToCartHandler()}
          title={'Quantity'}
          buttonTitle={'Add to cart'}
          quantity={quantity}
          setQuantity={setQuantity}
          productID={giftID}
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

export const getStaticProps = async () => {
  try {
    const api = await fetch(`${url}/gift-cards`)
    const data = await api.json()

    return {
      props: {
        giftCards: data,
      },
    }
  } catch (error) {
    console.log('[GIFT CRADS FETCH ERROR]', error)
    return {
      props: {
        giftCards: {},
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
const GiftCardWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledSelect = styled.select`
  width: 100%;
  text-align: center;
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.fade2};
  padding: 10px 0;
  outline: none;
`

export default giftCardPage
