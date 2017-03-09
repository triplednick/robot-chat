import { ADD_MESSAGE } from './actionconstants';

export default function addMessage(messageData) {
  return {
    type: ADD_MESSAGE,
    messageData
  };
}
