import { NextPage } from 'next'
import Head from 'next/head'

import Wizard from 'components/CheckoutWizard'
import styled from 'styled-components'

const CustomerDataPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      <Wrapper>
        <Wizard />
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  //background-color: red;
`

export default CustomerDataPage
