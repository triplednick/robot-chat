import * as types from './robot-chat-actions';

/************************************
 * ACTION DISPATCHERS
 ************************************/
export const updateReponses = response => {
  return {
    type: types.UPDATE_RESPONSES,
    response
  };
};

export const sendMessage = message => {
  return {
    type: types.SEND_MESSAGE,
    message
  };
};

export const addToMessageQueue = message => {
  return {
    type: types.ADD_TO_MESSAGE_QUEUE,
    message
  };
};

export const removeFromMessageQueue = message => {
  return {
    type: types.REMOVE_FROM_MESSAGE_QUEUE,
    message
  };
};
