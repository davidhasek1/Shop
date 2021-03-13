import { useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"
import Image from "next/image"

const ProductDetail = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(true)
  return isDetailOpen ? (
    <Modal closeModal={() => setIsDetailOpen(false)}>
      <ProductWrapper>
        <ImageContainer>
          <Image src="/images/product.jpg" width={500} height={500} />
        </ImageContainer>
        <DetailContent>
          <h1>Details</h1>
          <p>
            ipsumAliqua exercitation nostrud consequat elit ut. Ullamco sint et
            magna sunt elit laboris irure occaecat. Laboris quis cupidatat
            mollit fugiat aliquip ea vUt anim nulla in culpa. elit et
            reprehenderit occaecat aliquip non ullamco pariatur. Ipsum culpa
            consequat enim adipisicing do consequat fugiat.
          </p>
          <h1>Recomandations</h1>
          <p>
            Et enim nostrud irure ea proident non exercitation sit. Non
            consectetur officia exercitation consectetur aliquip elit in labore
            aliquip ullamco ipsum dolor minim. Exercitation eiusmod ea non elit
            Lorem ea voluptate veniam dolore commodo nisi commodo id excepteur.
            Laboris duis nulla elit non aliqua. Non ad commodo incididunt
            consectetur esse nisi laboris.
          </p>
          
        </DetailContent>
      </ProductWrapper>
    </Modal>
  ) : null
}

const ProductWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  margin: 20px;
`
const DetailContent = styled.div`
  width: 65%;
  margin: 20px;
`

export default ProductDetail
