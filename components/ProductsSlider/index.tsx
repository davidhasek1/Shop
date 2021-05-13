import { useRef } from "react"
import styled from "styled-components"
import { breakpoints } from "utils/responsivity"
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from "@styled-icons/evaicons-outline"
import { StyledIconBase } from "@styled-icons/styled-icon"

import TopSellingItem from "components/ProductItem"

const ProductsSlider = () => {
  const scrollRef = useRef(null)

  const scrolling = (offset: number) => {
    scrollRef.current.scrollLeft += offset
  }
  return (
    <ProductsSliderWrapper>
      <div>
        <h1>Top Trending Products</h1>
      </div>
      <ItemsOuterWrapper>
        <ArrowWrapper>
          <ArrowIosBackOutline onClick={() => scrolling(-256)} size={50} />
        </ArrowWrapper>

        <ItemsInnerWrapper ref={scrollRef}>
          <TopSellingItem
            detailID={"testid1"}
            title={"Top selling product 1"}
            shortDescription={"This is a short description about products"}
          />
          <TopSellingItem
            detailID={"testid2"}
            title={"Top selling product 2"}
            shortDescription={"This is a short description about products"}
          />
          <TopSellingItem
            detailID={"testid3"}
            title={"Top selling product 3"}
            shortDescription={"This is a short description about products"}
          />
          <TopSellingItem
            detailID={"testid1"}
            title={"Top selling product 1"}
            shortDescription={"This is a short description about products"}
          />
          <TopSellingItem
            detailID={"testid2"}
            title={"Top selling product 2"}
            shortDescription={"This is a short description about products"}
          />
          <TopSellingItem
            detailID={"testid3"}
            title={"Top selling product 3"}
            shortDescription={"This is a short description about products"}
          />
        </ItemsInnerWrapper>
        <ArrowWrapper>
          <ArrowIosForwardOutline onClick={() => scrolling(256)} size={50} />
        </ArrowWrapper>
      </ItemsOuterWrapper>
    </ProductsSliderWrapper>
  )
}

const ProductsSliderWrapper = styled.div``
const ItemsOuterWrapper = styled.div`
  display: flex;
  ${breakpoints("margin", "", [{ 800: "50px 0px" }])}
`
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;

  ${StyledIconBase} {
    color: ${(props) => props.theme.pink};
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
  ${breakpoints("display", "", [{ 800: "none" }])}
`
const ItemsInnerWrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  padding: 20px 0;
  scroll-behavior: smooth;
  ${breakpoints("padding", "", [{ 800: "20px 15px" }])}
  ${breakpoints("margin-right", "", [{ 800: "10px" }])}
`
export default ProductsSlider
