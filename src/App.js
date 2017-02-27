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

//TODO: Refactor this state logic with react-redux middleware.

//Create the store that stores the apps state
const store = createStore(mainReducer);

/**
 * Helper method to easily dispatch a message to the store to update the messagesHandled state.
 * @param { String } - Message that we will send to our store.
 */
const sendMessageDispatch = message => store.dispatch(sendMessage(message));

/**
 * Helper method to easily dispatch a response to the store to update the responses state.
 * @param { String } - Response that we will send to our store.
 */
const sendResposeDispatch = response =>
  store.dispatch(updateReponses(response));

/**
 * Helper method to easily dispatch a message to the store to update the messageQueue state.
 * @param { String } - Message that we will send to our store.
 */
const addToMessageQueueDispatch = message =>
  store.dispatch(addToMessageQueue(message));

/**
 * Helper method to easily dispatch a message to the store to update the messageQueue state.
 * @param { String } - Message that we will send to our store.
 */
const removeFromMessageQueueDispatch = message =>
  store.dispatch(removeFromMessageQueue(message));

/**
 * Helper method thats prints the state to the console.
 */
const showState = () => console.log(store.getState());

/**
 * Make an axios api call and return the promise
 * @param { String } - The message we want to send to the cleverbot API
 * @return { Promise } - A promise object that will eventually contain our response message.
 */
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
