import styled from 'styled-components'
import Link from 'next/link'
import { InputType } from 'types'

import CustomInput from 'components/General/CustomInput'
import CustomerForm from '../Informations/CustomerForm'
import FormActions from '../FormActions'
import { useState } from 'react'
import router from 'next/router'

export const inputsData: InputType[] = [
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

const Informations = (props: { shippingStep: (data) => any }) => {
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [apartment, setApartment] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [zip, setZip] = useState('')
  const [phone, setPhone] = useState('')

  const customer = {
    email: email,
    firstname: firstname,
    lastname: lastname,
    address: address,
    apartment: apartment,
    city: city,
    country: country,
    zip: zip,
    phone: phone,
  }

  const inputsData: InputType[] = [
    {
      type: 'text',
      placeholder: 'Email',
      value: email,
      onChange: (e) => setEmail(() => e.target.value),
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
      value: firstname,
      onChange: (e) => setFirstname(() => e.target.value),
      name: 'firstname',
      isName: true,
    },
    {
      type: 'text',
      placeholder: 'Last name',
      value: lastname,
      onChange: (e) => setLastname(() => e.target.value),
      name: 'lastname',
      isSurename: true,
    },

    {
      type: 'text',
      placeholder: 'Company (optional)',
      value: company,
      onChange: (e) => setCompany(() => e.target.value),
      name: 'companyname',
    },
    {
      type: 'text',
      placeholder: 'Address',
      value: address,
      onChange: (e) => setAddress(() => e.target.value),
      name: 'address',
    },
    {
      type: 'text',
      placeholder: 'Apartment (optional)',
      value: apartment,
      onChange: (e) => setApartment(() => e.target.value),
      name: 'apartment',
    },
    {
      type: 'text',
      placeholder: 'City',
      value: city,
      onChange: (e) => setCity(() => e.target.value),
      name: 'city',
    },
    {
      type: 'text',
      placeholder: 'Country',
      value: country,
      onChange: (e) => setCountry(() => e.target.value),
      name: 'country',
    },
    {
      type: 'text',
      placeholder: 'Zip code',
      value: zip,
      onChange: (e) => setZip(() => e.target.value),
      name: 'zipcode',
    },
    {
      type: 'text',
      placeholder: 'Phone',
      value: phone,
      onChange: (e) => setPhone(() => e.target.value),
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
      <CustomerForm inputsData={inputsData} />
      <FormActions
        stepForward={() => props.shippingStep(customer)}
        stepBack={() => router.push('/cart')}
        buttonCaption={'Continue to shipping'}
        linkCaption={'Back to cart'}
      />
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

export default Informations
