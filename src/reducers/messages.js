import { List } from 'immutable';
import { ADD_MESSAGE } from '../actions/actionconstants';

export default function messages(state = List([]), action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return state.push({
        ...action.messageData
      });

    default:
      return state;
  }
}
