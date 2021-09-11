import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_USERS, setUsers } from '../redux/userReducer'

const fetchUsersFromAPI = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker(params) {
  const data = yield call(fetchUsersFromAPI)
  const json = yield call(() => new Promise(resolve => resolve(data.json())))
  yield put(setUsers(json))
}
export function* userWatcher(params) {
  yield takeEvery(FETCH_USERS, fetchUserWorker)
}
