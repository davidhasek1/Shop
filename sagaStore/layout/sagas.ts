//set new redux saga for layout states - open modal oen menu etc..
import { put, call, takeEvery } from 'redux-saga/effects'
import {
  LAYOUT_OPEN_MOBILE_MENU_REQUEST,
  setOpenMobileMenuActionSucceeded,
  setOpenMobileMenuActionFailed,
} from './actions'

function* openMobileMenu(action) {
  try {
    yield put(setOpenMobileMenuActionSucceeded(action.payload))
  } catch (error) {
    console.log(error)
    yield put(setOpenMobileMenuActionFailed(action.payload))
  }
}

const layoutSaga = [takeEvery(LAYOUT_OPEN_MOBILE_MENU_REQUEST, openMobileMenu)]

export default layoutSaga
