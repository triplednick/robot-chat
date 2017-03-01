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
  return axios
    .post('/message', {
      message: message
    })
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
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.state = {
      responses: [],
      messageQueue: [],
      messagesHandled: [],
      inputMessage: ''
    };
  }
  componentDidMount() {
    console.log('componentDidMount()');
  }
  handleSubmit(e) {
    e.preventDefault();

    const inputMessage = this.state.inputMessage;

    if (e.keyCode === 13 && !e.shiftKey) {
      console.log(`Input message: ${this.state.inputMessage}`);
      if (inputMessage.length > 0) {
        //callServer(inputMessage);
      }
    }
  }
  handleChange(e) {
    this.setState({ inputMessage: e.target.value });
  }
  handleKeyUp(e) {
    const getCaret = el => {
      if (el.selectionStart) {
        return el.selectionStart;
      } else if (document.selection) {
        el.focus();
        var r = document.selection.createRange();
        if (r == null) {
          return 0;
        }
        var re = el.createTextRange(), rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint('EndToStart', re);
        return rc.text.length;
      }
      return 0;
    };

    if (e.keyCode === 13) {
      var content = this.state.inputMessage;
      var caret = getCaret(this.getDOMNode());
      if (e.shiftKey) {
        this.value = content.substring(0, caret - 1) +
          '\n' +
          content.substring(caret, content.length);
        e.stopPropagation();
      } else {
        this.value = content.substring(0, caret - 1) +
          content.substring(caret, content.length);
      }
    }
  }
  render() {
    return (
      <div className="app-box">
        <div className="chat-box-container">
          <div className="chat-box">
            chat box
          </div>
          <div className="input-area">
            <form onSubmit={this.handleSubmit}>
              <div className="text-area">
                <label>
                  <textarea
                    value={this.state.inputMessage}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    className="message-area"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
