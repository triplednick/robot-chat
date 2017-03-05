import React, { Component } from 'react';
import './ChatBox.css';

//import { createStore } from 'redux';
import axios from 'axios';
import InputBox from '../InputBox/InputBox';
import MessageBox from '../MessageBox/MessageBox';

const { List } = require('immutable');

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.callServer = this.callServer.bind(this);

    this.setState({
      messages: List([])
    });
  }
  /**
 * Make an axios api call and return the promise
 * @param { String } - The message we want to send to the cleverbot API
 * @return { Promise } - A promise object that will eventually contain our response message.
 */
  callServer(message) {
    return axios
      .post('/message', {
        message: message
      })
      .then(function(response) {
        const data = response.data;
        const cleverOutput = data.clever_output;

        console.log(cleverOutput);
      })
      .catch(function(error) {
        console.log('in util class with error');
        console.log(error);
      });
  }
  render() {
    return (
      <div className="app-box">
        <MessageBox />
        <InputBox callServer={this.callServer} />
      </div>
    );
  }
}

export default ChatBox;
