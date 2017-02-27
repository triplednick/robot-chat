import React, { Component } from 'react';
import './App.css';

import { createStore } from 'redux';
import mainReducer from './reducers/mainReducer';
import axios from 'axios';

import {
  updateReponses,
  sendMessage,
  addToMessageQueue,
  removeFromMessageQueue
} from './actions/dispatchers';

const store = createStore(mainReducer);

const sendMessageDispatch = message => store.dispatch(sendMessage(message));
const sendResposeDispatch = response =>
  store.dispatch(updateReponses(response));
const addToMessageQueueDispatch = message =>
  store.dispatch(addToMessageQueue(message));
const removeFromMessageQueueDispatch = message =>
  store.dispatch(removeFromMessageQueue(message));

const showState = () => console.log(store.getState());

const callServer = message => {
  return axios.post('/message', {
    message: message
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: [],
      messageQueue: [],
      messagesHandled: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount()');

    const message = 'Be quiet!!!';
    showState();
    addToMessageQueueDispatch(message);
    showState();

    callServer(message)
      .then(function(response) {
        const data = response.data;
        const cleverOutput = data.clever_output;

        sendResposeDispatch(cleverOutput);
        removeFromMessageQueueDispatch(message);
        sendMessageDispatch(message);
        showState();
      })
      .catch(function(error) {
        console.log('in util class with error');
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="chat-box">
          chat box
        </div>
        <div className="input-field">
          input field
        </div>
      </div>
    );
  }
}

export default App;
