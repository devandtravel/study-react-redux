import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator } from '../redux/countReducer'
import { put, takeEvery } from 'redux-saga/effects'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* incrementWorker() {
  yield delay(1000)
  yield put(incrementCreator())
}
function* decrementWorker() {
  yield delay(1000)
  yield put(decrementCreator())
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker)
  yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}
