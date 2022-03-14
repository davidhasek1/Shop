import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { setConfirmModal } from 'sagaStore/actions'

import Backdrop from './Backdrop'
import ModalBody from './ModalBody'

const ModalRoot = (props: {
  title?: string
  message?: string
  children?: any
  isConfirmModal?: boolean
  onClose?: () => void
}) => {
  //HANDLE if page is mounted => then is accessible document element
  const [isMounted, setIsMounted] = useState(false)
  const ModalBackdrop = isMounted && document.getElementById('modal-backdrop')
  const ModalWindow = isMounted && document.getElementById('modal-root')

  const [backdropClose, setBackdropClose] = useState(false)
  const [close, setClose] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const closeHandler = () => {
    if (!props.isConfirmModal) {
      setBackdropClose(true)
      setClose(true)
    }
  }
  const confirmModalHandler = (value: boolean) => {
    dispatch(setConfirmModal(value))

    setClose(true)
    setBackdropClose(true)
  }

  return (
    <>
      {isMounted &&
        ReactDOM.createPortal(
          !backdropClose && (
            <Backdrop onBackdrop={props.onClose || closeHandler} />
          ),
          ModalBackdrop
        )}
      {isMounted &&
        ReactDOM.createPortal(
          !backdropClose && (
            <ModalBody
              title={props.title}
              message={props.message}
              setIsConfirmed={confirmModalHandler}
              onClose={props.onClose}
              close={close}
              children={props.children}
              isConfirmModal={props.isConfirmModal}
            />
          ),
          ModalWindow
        )}
    </>
  )
}

export default ModalRoot
