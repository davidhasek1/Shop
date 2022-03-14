import { takeEvery, put, call } from 'redux-saga/effects'
import {
  EXAMPLE_ACTION_REQUEST,
  setExampleActionSucceeded,
  setExampleActionFailed,
} from 'sagaStore/example/actions'

import { MockFetchData } from 'services'

function* fetchExampleData(action) {
  try {
    const mockResponese = yield call(MockFetchData, action.payload) //call na API, BE, ...
    yield put(setExampleActionSucceeded(mockResponese))
  } catch (error) {
    console.log(error)
    yield put(setExampleActionFailed())
  }
}

const exampleSaga = [takeEvery(EXAMPLE_ACTION_REQUEST, fetchExampleData)]

export default exampleSaga
