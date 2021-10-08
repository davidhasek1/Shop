import styled from 'styled-components'

const WindowStyled = styled.div`
  background-color: ${(props) => props.theme.white};
  min-width: 50%;

  max-height: 70vh;
  overflow-x: hidden;
  margin: 10px;
  z-index: 30;
`
const Title = styled.h2`
  margin: 0;
  padding: 10px;
  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.white};
`
const Message = styled.div`
  padding: 20px 10px;
`
const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`

const Window = (props: {
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}) => {
  return (
    <WindowStyled>
      {props.title ? <Title>{props.title}</Title> : null}
      <Message>{props.message}</Message>
      <Actions>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onConfirm}>OK</button>
      </Actions>
    </WindowStyled>
  )
}

export default Window
