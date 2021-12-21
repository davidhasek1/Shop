import styled from 'styled-components'

import Spinner from 'components/General/LoadingSpinner'

const Example = () => {
  return (
    <Wrapper>
      <div>
        <Button className={'inverted'}>Hi there</Button>
        <Button className={'size--large'}>Hi there</Button>
        <Button className={'size--small'}>Hi there</Button>

        <h1>h1 title</h1>
        <h2>h2 title</h2>
        <h3>h3 title</h3>

        <Spinner spinnerSize={25} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 200px;
  display: flex;

  align-items: center;
  flex-direction: column;
`
const Button = styled.button``
export default Example
