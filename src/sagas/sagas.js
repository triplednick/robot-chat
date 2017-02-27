import { takeEvery, put } from 'redux-saga/effects';

import { sendResposeDispatch } from '../actions/dispatchers';
import * as types from '../actions/robot-chat-actions';
import { sendMessage } from '../api-calls/cleverbot-util';

// worker Saga: will be fired on SEND_MESSAGE actions
function* sendMessageOut(action) {
  try {
    const message = yield sendMessage();
    console.log('saga succeeded with message: ' + message);
    yield put(sendResposeDispatch(message));
  } catch (e) {
    console.log('error in saga: ' + e);
    //yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(types.SEND_MESSAGE, sendMessageOut);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

//function* mySaga() {
//yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
//}

export default mySaga;
