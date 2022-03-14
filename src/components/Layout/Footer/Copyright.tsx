import styled from 'styled-components'

const Copyright = ({ copyright }) => {
  return (
    <CopyrightWrapper>
      <Item>{copyright}</Item>
      <Item>Made with &hearts; by Hasan</Item>
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 12px;
  color: #808080;

  ${(props) => props.theme.breakpoint.L} {
    order: 1;
    padding: 20px 0;
  }
  ${(props) => props.theme.breakpoint.M} {
    flex-direction: column;
  }
`
const Item = styled.span`
  margin: 10px 0;
`

export default Copyright
