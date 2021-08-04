import styled, { css } from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const BannerContent = (props: {
  title?: string
  text?: string
  children?: any
  isBanner?: boolean
}) => {
  return (
    <Content isBanner={props.isBanner}>
      <Title>
        {props.title}
        <Line isBanner={props.isBanner} />
      </Title>
      {props.text}
      {props.children}
    </Content>
  )
}

type Props = {
  isBanner?: boolean
}

const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ isBanner }) => (isBanner ? '0 25px;' : 0)};
  text-align: left;
  font-size: 14px;
  line-height: 25px;
  font-weight: 300;
  ${breakpoints('margin', '', [{ M: '15px 0' }])}
`

const Title = styled.h3`
  //padding: 10px 0;
  margin: 0;
`
const Line = styled.div<Props>`
  ${({ isBanner }) =>
    isBanner &&
    css`
      width: 50px;
      margin-top: 10px;
      border-bottom: 2px solid ${(props) => props.theme.black};
    `}
`
export default BannerContent
