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
const FormActions = (props: {
  step: () => void
  buttonCaption?: string
  linkCaption?: string
}) => {
  return (
    <Actions>
      <Button onClick={props.step}>{props.buttonCaption || 'NEXT'}</Button>
      <Link href="/cart">{props.linkCaption || 'Go back'}</Link>
    </Actions>
  )
}

export default FormActions
