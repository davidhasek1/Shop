import { useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"

const ProductDetail = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(true)
  return (
    isDetailOpen ? 
    <Modal closeModal={() => setIsDetailOpen(false)}>
    <div>
      feeefefe
    </div>
    </Modal>
    : null
  )
}

export default ProductDetail
