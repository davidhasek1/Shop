//set new redux saga for layout states - open modal oen menu etc..
import { put, call, takeEvery } from 'redux-saga/effects'
import {
  LAYOUT_OPEN_MOBILE_MENU_REQUEST,
  setOpenMobileMenuActionSucceeded,
  setOpenMobileMenuActionFailed,
  LAYOUT_CONFIRM_MODAL_REQUEST,
  setConfirmModalSucceed,
  setConfirmModalFailed,
} from './actions'

function* confirmModal(action) {
  try {
    yield put(setConfirmModalSucceed(action.payload))
  } catch (error) {
    console.log('[CONFIRM MODAL ERROR]', error)
    yield put(setConfirmModalFailed())
  }
}

function* openMobileMenu(action) {
  try {
    yield put(setOpenMobileMenuActionSucceeded(action.payload))
  } catch (error) {
    console.log('[OPEN MOBILE MENU ERROR]', error)
    yield put(setOpenMobileMenuActionFailed(action.payload))
  }
}

const layoutSaga = [
  takeEvery(LAYOUT_OPEN_MOBILE_MENU_REQUEST, openMobileMenu),
  takeEvery(LAYOUT_CONFIRM_MODAL_REQUEST, confirmModal),
]

export default layoutSaga
