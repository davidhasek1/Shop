import { useRef } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from '@styled-icons/evaicons-outline'
import { StyledIconBase } from '@styled-icons/styled-icon'

const Slider = ({ children }) => {
  const scrollRef = useRef(null)
  const scrolling = (offset: number) => {
    scrollRef.current.scrollLeft += offset
  }

  return (
    <SliderWrapper>
      <ItemsOuterWrapper>
        <ArrowWrapper>
          <ArrowIosBackOutline onClick={() => scrolling(-256)} size={50} />{' '}
          {/*TODO: U obrazku udělat scroll o width obrazku */}
        </ArrowWrapper>

        <ItemsInnerWrapper ref={scrollRef}>{children}</ItemsInnerWrapper>

        <ArrowWrapper>
          <ArrowIosForwardOutline onClick={() => scrolling(256)} size={50} />
        </ArrowWrapper>
      </ItemsOuterWrapper>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  padding-bottom: 50px;
`
const ItemsOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${breakpoints('margin', '', [{ L: '50px 0px' }])}
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

  ${breakpoints('display', '', [{ L: 'none' }])}
`
const ItemsInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  padding: 20px 0;
  scroll-behavior: smooth;

  ${breakpoints('padding', '', [{ L: '20px 15px' }])}
  ${breakpoints('margin-right', '', [{ L: '10px' }])}
`
export default Slider
