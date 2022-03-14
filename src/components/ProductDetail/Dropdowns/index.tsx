import { useState } from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

const Dropdowns = (props: {
  isOpen?: boolean
  title: string
  content: string
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(
    props.isOpen !== undefined ? props.isOpen : false
  )

  return (
    <Dropdown>
      <div>
        <DropdownHeading onClick={() => setIsOpen(!isOpen)}>
          <div>{props.title}</div>
          <div>{isOpen ? '-' : '+'}</div>
        </DropdownHeading>
        <AnimateHeight height={isOpen ? 'auto' : 0}>
          <Content>{props.content}</Content>
        </AnimateHeight>
      </div>
    </Dropdown>
  )
}

const Dropdown = styled.div``
const DropdownHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  cursor: pointer;

  font-weight: 600;
`
const Content = styled.div`
  margin: 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
`
export default Dropdowns
