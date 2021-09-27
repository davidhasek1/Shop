import { NextPage } from 'next'

import styled from 'styled-components'
import Head from 'next/head'

import ContactForm from 'components/ContactForm'
import MapCircle from 'components/MapPin'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Conatct Page</title>
      </Head>
      <Container>
        <FormWrapper>
          <ContactForm />
        </FormWrapper>
        <MapWrapper>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.616824924917!2d12.744766315723895!3d50.243062979447245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0972740d67709%3A0xc8932e16a11d801f!2zUGF2bGEgRmFya2HFoW92w6EgU2NoYXVlcm92w6E!5e0!3m2!1scs!2scz!4v1615127734489!5m2!1scs!2scz"
            loading="lazy"
          />
          <MapCircle />
        </MapWrapper>
      </Container>
    </div>
  )
}
//TODO: create cms content + Fetch data

const Container = styled.div`
  display: flex;
  ${(props) => props.theme.breakpoint.L} {
flex-direction: column;
  }
`
const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
}
`
const MapWrapper = styled.div`
  position: relative;
  width: 50%;
  ${(props) => props.theme.breakpoint.L} {
    width: 100%;
  }
`
const Map = styled.iframe`
  display: block; /* iframe je defaultne inline !! */
  width: 100%;
  height: 90vh;
  border: none;
  filter: grayscale(100%);
  ${(props) => props.theme.breakpoint.L} {
    height: 50vh;
  }
`

export default Contact
