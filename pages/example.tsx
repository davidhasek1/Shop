import styled from 'styled-components'

const Example = () => {
  return (
    <Wrapper>
      <Button className={'inverted'}>Hi there</Button>
      <Button className={'size--large'}>Hi there</Button>
      <Button className={'size--small'}>Hi there</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 200px;
`
const Button = styled.button`

`
export default Example
