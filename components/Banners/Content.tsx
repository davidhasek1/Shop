import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'

const BannerContent = (props: { title: string; text: string }) => {
  return (
    <Content>
      <Title>
        {props.title}
        <Line />
      </Title>
      {props.text}
    </Content>
  )
}
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  text-align: left;
  font-size: 14px;
  line-height: 25px;
  font-weight: 300;
  ${breakpoints(' margin', '', [{ M: '15px 0' }])}
`

const Title = styled.h3`
  padding: 10px 0;
  margin: 0;
`
const Line = styled.div`
  width: 50px;
  margin-top: 10px;
  border-bottom: 2px solid ${(props) => props.theme.black};
`
export default BannerContent
