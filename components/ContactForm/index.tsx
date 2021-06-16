import styled from 'styled-components'
import { breakpoints } from 'utils/responsivity'
import { User, Message } from '@styled-icons/boxicons-regular'
import { AlternateEmail } from '@styled-icons/material-sharp/AlternateEmail'

import Button from 'components/UI/Button'
import Heading from 'components/Heading'

const contactForm = () => {
  return (
    <Content>
      <Heading>
        Send
        <br />
        Feedback
      </Heading>
      <span>Your opinion is important for us!</span>
      <Form>
        <InputWrapper>
          <User size={25} /> <StyledInput type="text" placeholder="Name" />
        </InputWrapper>
        <InputWrapper>
          <AlternateEmail size={25} />
          <StyledInput type="email" placeholder="E-mail" />
        </InputWrapper>
        <InputWrapper>
          <Message size={25} />
          <StyledTextarea placeholder="Message"></StyledTextarea>
        </InputWrapper>
        <Button onClick={() => console.log('submit action')}>Send</Button>
      </Form>
    </Content>
  )
}

const Content = styled.div`
  width: 60%;
  min-width: 200px;

  ${breakpoints('width', '', [{ 600: '90%' }])}
  ${breakpoints('margin', '', [{ 800: '25px 0' }])}
`
const Form = styled.form`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  margin-bottom: 20px;
  padding: 10px;
  padding-left: 5px;
  border-radius: 5px;
`
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
`
const StyledTextarea = styled.textarea`
  width: 100%;
  margin-left: 5px;
  padding-left: 10px;
  padding-top: 5px;
  height: 150px;
  resize: vertical;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: Popins, sans-serif;
`

export default contactForm
