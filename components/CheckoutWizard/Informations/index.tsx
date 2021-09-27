import styled from 'styled-components'
import Link from 'next/link'

import CustomInput from 'components/General/CustomInput'

export type InputType = {
  type: string
  placeholder?: string
  value: any
  onChange: () => void
  text?: string
  name: string
  isName?: boolean
  isSurename?: boolean
  isCheckbox?: boolean
}

const Informations = () => {
  //TODO: Do reduxu udělat customer objekt obsahující data z formuláře
  //(Selectors -> GET hodnoty) SET -> actions

  const inputsData: InputType[] = [
    {
      type: 'text',
      placeholder: 'Email',
      value: '',
      onChange: () => {},
      name: 'email',
    },
    {
      type: 'checkbox', //TRUE/FALSE
      value: '',
      onChange: () => {},
      name: 'newsletter',
      isCheckbox: true,
    },
    {
      type: 'text',
      placeholder: 'First name',
      value: '',
      onChange: () => {},
      name: 'firstname',
      isName: true,
    },
    {
      type: 'text',
      placeholder: 'Last name',
      value: '',
      onChange: () => {},
      name: 'lastname',
      isSurename: true,
    },

    {
      type: 'text',
      placeholder: 'Company (optional)',
      value: '',
      onChange: () => {},
      name: 'companyname',
    },
    {
      type: 'text',
      placeholder: 'Address',
      value: '',
      onChange: () => {},
      name: 'address',
    },
    {
      type: 'text',
      placeholder: 'Apartment (optional)',
      value: '',
      onChange: () => {},
      name: 'apartment',
    },
    {
      type: 'text',
      placeholder: 'City',
      value: '',
      onChange: () => {},
      name: 'city',
    },
    {
      type: 'text',
      placeholder: 'Country',
      value: '',
      onChange: () => {},
      name: 'country',
    },
    {
      type: 'text',
      placeholder: 'Zip code',
      value: '',
      onChange: () => {},
      name: 'zipcode',
    },
    {
      type: 'text',
      placeholder: 'Phone',
      value: '',
      onChange: () => {},
      name: 'phone',
    },
  ]

  return (
    <Wrapper>
      <Header>
        <h3>Contact informations</h3>
        <div>
          Already have an account?{' '}
          <Link href="/account/login">
            <Anchor>Log in</Anchor>
          </Link>
        </div>
      </Header>

      <CustomInput
        type={inputsData[0].type}
        placeholder={inputsData[0].placeholder}
        value={inputsData[0].value}
        onChange={inputsData[0].onChange}
        text={inputsData[0].text}
        name={inputsData[0].name}
      />
      <CheckboxInput>
        <CustomInput
          type={inputsData[1].type}
          placeholder={inputsData[1].placeholder}
          value={inputsData[1].value}
          onChange={inputsData[1].onChange}
          text={inputsData[1].text}
          name={inputsData[1].name}
          isCheckbox={true}
        />
        <Text>Stay in touch</Text>
      </CheckboxInput>
      <h3>Shipping address</h3>

      <HalfInput>
        <CustomInputName
          type={inputsData[2].type}
          placeholder={inputsData[2].placeholder}
          value={inputsData[2].value}
          onChange={inputsData[2].onChange}
          text={inputsData[2].text}
          name={inputsData[2].name}
          isName={true}
        />
        <CustomInputSurename
          type={inputsData[3].type}
          placeholder={inputsData[3].placeholder}
          value={inputsData[3].value}
          onChange={inputsData[3].onChange}
          text={inputsData[3].text}
          name={inputsData[3].name}
          isSurename={true}
        />
      </HalfInput>
      <CustomInput
        type={inputsData[4].type}
        placeholder={inputsData[4].placeholder}
        value={inputsData[4].value}
        onChange={inputsData[4].onChange}
        text={inputsData[4].text}
        name={inputsData[4].name}
      />
      <CustomInput
        type={inputsData[5].type}
        placeholder={inputsData[5].placeholder}
        value={inputsData[5].value}
        onChange={inputsData[5].onChange}
        text={inputsData[5].text}
        name={inputsData[5].name}
      />
      <CustomInput
        type={inputsData[6].type}
        placeholder={inputsData[6].placeholder}
        value={inputsData[6].value}
        onChange={inputsData[6].onChange}
        text={inputsData[6].text}
        name={inputsData[6].name}
      />
      <CustomInput
        type={inputsData[7].type}
        placeholder={inputsData[7].placeholder}
        value={inputsData[7].value}
        onChange={inputsData[7].onChange}
        text={inputsData[7].text}
        name={inputsData[7].name}
      />
      <CustomInput
        type={inputsData[8].type}
        placeholder={inputsData[8].placeholder}
        value={inputsData[8].value}
        onChange={inputsData[8].onChange}
        text={inputsData[8].text}
        name={inputsData[8].name}
      />
      <CustomInput
        type={inputsData[9].type}
        placeholder={inputsData[9].placeholder}
        value={inputsData[9].value}
        onChange={inputsData[9].onChange}
        text={inputsData[9].text}
        name={inputsData[9].name}
      />
      <CustomInput
        type={inputsData[10].type}
        placeholder={inputsData[10].placeholder}
        value={inputsData[10].value}
        onChange={inputsData[10].onChange}
        text={inputsData[10].text}
        name={inputsData[10].name}
      />
      <Actions>
        <Button>Continue to shipping</Button>
        <Link href="/cart">Return to cart</Link>
      </Actions>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 35px;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) => props.theme.breakpoint.M} {
    flex-direction: column;
  }
`
const CustomInputName = styled(CustomInput)``
const CustomInputSurename = styled(CustomInput)``

const HalfInput = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`

const CheckboxInput = styled.div`
  display: flex;
`
const Text = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`
const Anchor = styled.a`
  color: ${(props) => props.theme.pink};
`
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
export default Informations
