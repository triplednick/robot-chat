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
  }
}

function* mySaga() {
  yield takeEvery(types.SEND_MESSAGE, sendMessageOut);
}

export default mySaga;
