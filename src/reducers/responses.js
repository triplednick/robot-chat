import { UPDATE_RESPONSES } from '../actions/robot-chat-actions';

export const responses = (state = [], action) => {
  switch (action.type) {
    case UPDATE_RESPONSES:
      return [...state, action.response];
    default:
      return state;
  }
};
