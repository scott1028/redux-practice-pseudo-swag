import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* createChatStart(api, action) {
    try {
        console.log(api, action);
        // https://github.com/diegohaz/arc/wiki/API-service
        const detail = yield call([api, api.post], action.url, action.payload)
            // https://github.com/diegohaz/arc/wiki/Actions#async-actions
        yield put({
            type: actions.CREATE_CHAT_SUCCESS,
            payload: {
                ...action.payload,
                ...detail,
            },
            meta: {
                thunk: action.meta.thunk,
            },
        })
    } catch (e) {
        debugger;
        yield put({
            type: actions.CREATE_CHAT_FAIL,
            payload: e,
            meta: {
                thunk: action.meta.thunk,
            },
        })
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

export function* requestChatList(api, action) {
    try {
        const detail = yield call([api, api.get], action.url, action.payload)
        var chats = []
        for (var k in detail) {
            let rand = Math.floor(Math.random() * 10) + 1
            debugger;
            chats.push({
                id: k,
                // owner: null,
                avatar: `/images/${rand}.jpeg`,
                numUsers: 0,
                ...detail[k]
            })
        }
        yield put({
            type: actions.CREATE_CHAT_SUCCESS,
            payload: chats,
            meta: {
                thunk: action.meta.thunk,
            },
        })
    } catch (e) {
        // alert(e);
        yield put({
            type: actions.CREATE_CHAT_SUCCESS,
            payload: [],
            meta: {
                thunk: action.meta.thunk,
            },
        })
    }
}

export default function*({ api }) {
    yield takeEvery(actions.CREATE_CHAT_START, createChatStart, api)
    yield takeEvery(actions.CREATE_CHAT_SUCCESS, createChatSuccess, api)
    yield takeEvery(actions.CREATE_CHAT_FAIL, createChatFail, api)
    yield takeEvery(actions.REQUEST_CHAT_LIST, requestChatList, api)
}