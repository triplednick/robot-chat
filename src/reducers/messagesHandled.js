import { SEND_MESSAGE } from '../actions/robot-chat-actions';

export const messagesHandled = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const message = action.message;
      return [...state, message];
    default:
      return state;
  }
};
