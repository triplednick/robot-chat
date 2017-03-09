import { combineReducers } from 'redux';
import messages from './messages';

const robotApp = combineReducers({ messages });

export default robotApp;
