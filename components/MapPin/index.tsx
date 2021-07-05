import styled from 'styled-components'

const MapCircle = () => {
  return (
    <OuterCircle>
      <InnerCircle>
        <Dot />
      </InnerCircle>
    </OuterCircle>
  )
}

const OuterCircle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.theme.pink};
  background-color: #ffbac93d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const InnerCircle = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid ${(props) => props.theme.pink};
  background-color: #ffbac983;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.theme.pink};
  border-radius: 50%;
`

export default MapCircle
