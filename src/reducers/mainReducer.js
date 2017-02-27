import { messageQueue } from './messageQueue';
import { messagesHandled } from './messagesHandled';
import { responses } from './responses';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  messageQueue,
  messagesHandled,
  responses
});

export default reducer;
