import styled from 'styled-components'

import Form from './Form'

const ContactForm = () => {
  return (
    <Content>
      <WrapperTitle>
        <h2>
          Send
          <br />
          Feedback
        </h2>
      </WrapperTitle>

      <span>Your opinion is important for us!</span>

      <Form />
    </Content>
  )
}

const Content = styled.div`
  width: 60%;
  min-width: 200px;
  ${(props) => props.theme.breakpoint.L} {
    margin: 25px 0;
  }
  ${(props) => props.theme.breakpoint.M} {
    width: 90%;
  }
`
const WrapperTitle = styled.div`
  padding-top: 20px;
`

export default ContactForm
