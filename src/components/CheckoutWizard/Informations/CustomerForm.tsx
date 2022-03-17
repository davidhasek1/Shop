import styled from 'styled-components'

import FormActions from '../FormActions'
import CustomInput from 'components/General/CustomInput'
import { InputType } from 'types'

const CustomInputName = styled(CustomInput)``
const CustomInputSurename = styled(CustomInput)``

const HalfInput = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`

const CustomerForm = (props: { inputsData: InputType[] }) => {
  return (
    <div>
      <HalfInput>
        <CustomInputName
          type={props.inputsData[2].type}
          placeholder={props.inputsData[2].placeholder}
          value={props.inputsData[2].value}
          onChange={props.inputsData[2].onChange}
          text={props.inputsData[2].text}
          name={props.inputsData[2].name}
          isName={true}
        />
        <CustomInputSurename
          type={props.inputsData[3].type}
          placeholder={props.inputsData[3].placeholder}
          value={props.inputsData[3].value}
          onChange={props.inputsData[3].onChange}
          text={props.inputsData[3].text}
          name={props.inputsData[3].name}
          isSurename={true}
        />
      </HalfInput>
      <CustomInput
        type={props.inputsData[4].type}
        placeholder={props.inputsData[4].placeholder}
        value={props.inputsData[4].value}
        onChange={props.inputsData[4].onChange}
        text={props.inputsData[4].text}
        name={props.inputsData[4].name}
      />
      <CustomInput
        type={props.inputsData[5].type}
        placeholder={props.inputsData[5].placeholder}
        value={props.inputsData[5].value}
        onChange={props.inputsData[5].onChange}
        text={props.inputsData[5].text}
        name={props.inputsData[5].name}
      />
      <CustomInput
        type={props.inputsData[6].type}
        placeholder={props.inputsData[6].placeholder}
        value={props.inputsData[6].value}
        onChange={props.inputsData[6].onChange}
        text={props.inputsData[6].text}
        name={props.inputsData[6].name}
      />
      <CustomInput
        type={props.inputsData[7].type}
        placeholder={props.inputsData[7].placeholder}
        value={props.inputsData[7].value}
        onChange={props.inputsData[7].onChange}
        text={props.inputsData[7].text}
        name={props.inputsData[7].name}
      />
      <CustomInput
        type={props.inputsData[8].type}
        placeholder={props.inputsData[8].placeholder}
        value={props.inputsData[8].value}
        onChange={props.inputsData[8].onChange}
        text={props.inputsData[8].text}
        name={props.inputsData[8].name}
      />
      <CustomInput
        type={props.inputsData[9].type}
        placeholder={props.inputsData[9].placeholder}
        value={props.inputsData[9].value}
        onChange={props.inputsData[9].onChange}
        text={props.inputsData[9].text}
        name={props.inputsData[9].name}
      />
      <CustomInput
        type={props.inputsData[10].type}
        placeholder={props.inputsData[10].placeholder}
        value={props.inputsData[10].value}
        onChange={props.inputsData[10].onChange}
        text={props.inputsData[10].text}
        name={props.inputsData[10].name}
      />
    </div>
  )
}

export default CustomerForm
