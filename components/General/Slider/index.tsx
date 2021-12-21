import { useRef } from 'react'
import styled from 'styled-components'

import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from '@styled-icons/evaicons-outline'
import { StyledIconBase } from '@styled-icons/styled-icon'

const Slider = (props: { children: any; slideDistatnce: number }) => {
  const scrollRef = useRef(null)
  const scrolling = (offset: number) => {
    scrollRef.current.scrollLeft += offset
  }

  //TODO: předělat a použít pole obrázků a přes jejich INDEXy ne přes useRef

  return (
    <SliderWrapper>
      <ItemsOuterWrapper>
        <ArrowWrapper>
          <ArrowIosBackOutline
            onClick={() => scrolling(-1 * props.slideDistatnce)}
            size={50}
          />
        </ArrowWrapper>

        <ItemsInnerWrapper ref={scrollRef}>{props.children}</ItemsInnerWrapper>

        <ArrowWrapper>
          <ArrowIosForwardOutline
            onClick={() => scrolling(props.slideDistatnce)}
            size={50}
          />
        </ArrowWrapper>
      </ItemsOuterWrapper>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div``
const ItemsOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${(props) => props.theme.breakpoint.L} {
    margin: 50px 0px;
  }
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
  ${(props) => props.theme.breakpoint.L} {
    display: none;
  }
`
const ItemsInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  padding: 20px 0;
  scroll-behavior: smooth;
  ${(props) => props.theme.breakpoint.L} {
    padding: 20px 15px;
    margin-right: 10px;
  }
`
export default Slider
