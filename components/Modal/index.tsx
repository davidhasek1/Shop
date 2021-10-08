import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import Backdrop from './Backdrop'
import ModalBody from './ModalBody'

const ModalRoot = (props: {
  title?: string
  message?: string
  onConfirm?: () => void
  onCancel?: () => void
}) => {
  //HANDLE if page is mounted => then is accessible document element
  const [isMounted, setIsMounted] = useState(false)
  const [backdropClose, setBackdropClose] = useState(false)

  const ModalBackdrop = isMounted && document.getElementById('modal-backdrop')
  const ModalWindow = isMounted && document.getElementById('modal-root')

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return (
    <>
      {isMounted &&
        ReactDOM.createPortal(
          !backdropClose && (
            <Backdrop onBackdrop={() => setBackdropClose(true)} />
          ),
          ModalBackdrop
        )}
      {isMounted &&
        ReactDOM.createPortal(
          !backdropClose && (
            <ModalBody
              title={props.title}
              message={props.message}
              onConfirm={props.onConfirm}
              onCancel={props.onCancel}
            />
          ),
          ModalWindow
        )}
    </>
  )
}

export default ModalRoot
