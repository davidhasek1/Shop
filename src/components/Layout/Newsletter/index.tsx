import styled from 'styled-components'

const Newsletter = () => {
  return (
    <Wrapper>
      <h3>
        Don't be scared and with ease you can subscribe our great nesletter
      </h3>
      <Form onSubmit={() => console.log('nesletetr submited')}>
        <StyledInput type="email" placeholder={'Enter your e-mail'} />
        <Button className={'inverted'}>Sign up</Button>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  padding: 50px 0;
  border-top: 2px solid ${(props) => props.theme.black};
`
const Form = styled.form`
  padding-top: 25px;
`
const StyledInput = styled.input`
  min-width: 250px;
  border: none;
  background: none;
  outline: none;
  border-bottom: 2px solid ${(props) => props.theme.black};
  padding: 10px 5px;
  margin-right: 10px;
  ${(props) => props.theme.breakpoint.M} {
    margin: 0;
  }
`
const Button = styled.button`
  padding: 10px 60px;
  ${(props) => props.theme.breakpoint.M} {
    margin-top: 15px;
    width: 250px;
  }
`

export default Newsletter
