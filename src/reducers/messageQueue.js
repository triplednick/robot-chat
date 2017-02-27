import {
  ADD_TO_MESSAGE_QUEUE,
  REMOVE_FROM_MESSAGE_QUEUE
} from '../actions/robot-chat-actions';

export const messageQueue = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_MESSAGE_QUEUE:
      return [...state, action.message];

    case REMOVE_FROM_MESSAGE_QUEUE:
      const message = action.message;
      const messageIndex = state.indexOf(message);

      if (messageIndex > -1) {
        const newArr = state.filter((val, index) => {
          return !(index === messageIndex);
        });

        return newArr;
      } else {
        return state;
      }
    default:
      return state;
  }
};
