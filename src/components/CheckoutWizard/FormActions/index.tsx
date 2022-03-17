import styled from 'styled-components'
import Link from 'next/link'

const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.pink};
  margin-top: 25px;
`
const Button = styled.button`
  padding: 15px;
  margin-right: 10px;
`
const BackButton = styled.button`
  padding: 0;
  color: ${(props) => props.theme.pink};
  background: none;
  margin: 0 1rem;
  &:hover {
    border: none;
    outline: none;
    transform: scale(1.1);
  }
`

const FormActions = (props: {
  stepForward: (data) => void
  stepBack: (data) => void

  buttonCaption?: string
  linkCaption?: string
}) => {
  return (
    <Actions>
      <Button onClick={props.stepForward}>
        {props.buttonCaption || 'NEXT'}
      </Button>
      <BackButton onClick={props.stepBack}>
        {props.linkCaption || 'Go back'}
      </BackButton>
    </Actions>
  )
}

export default FormActions
