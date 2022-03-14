import styled from 'styled-components'

const BDWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.backdrop};
  z-index: 21;
`

const Backdrop = (props: { onBackdrop: () => void }) => {
  return <BDWrapper onClick={props.onBackdrop}></BDWrapper>
}

export default Backdrop
