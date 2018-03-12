import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* createChatStart(api, action) {
  try {
    console.log(api);
    // https://github.com/diegohaz/arc/wiki/API-service
    // const detail = yield call([api, api.post], ``, null)
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    console.log(0)
    yield put(actions.createChatAction(actions.CREATE_CHAT_SUCCESS))
  } catch (e) {
    yield put(actions.createChatAction(actions.CREATE_CHAT_FAIL))
  }
}

export function* createChatSuccess(api, action) {
  try {
    console.log(1);
    // // https://github.com/diegohaz/arc/wiki/API-service
    // const detail = yield call([api, api.post], `/${resource}`, data)
    // // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    // yield put(actions.resourceCreateSuccess(resource, detail, { data }, thunk))
  } catch (e) {
    // yield put(actions.resourceCreateFailure(resource, e, { data }, thunk))
  }
}

export function* createChatFail(api, action) {
  try {
    console.log(2);
    // // https://github.com/diegohaz/arc/wiki/API-service
    // const detail = yield call([api, api.post], `/${resource}`, data)
    // // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    // yield put(actions.resourceCreateSuccess(resource, detail, { data }, thunk))
  } catch (e) {
    // yield put(actions.resourceCreateFailure(resource, e, { data }, thunk))
  }
}

export default function* ({ api }) {
  yield takeEvery(actions.CREATE_CHAT_START, createChatStart, api)
  yield takeEvery(actions.CREATE_CHAT_SUCCESS, createChatSuccess, api)
  yield takeEvery(actions.CREATE_CHAT_FAIL, createChatFail, api)
}