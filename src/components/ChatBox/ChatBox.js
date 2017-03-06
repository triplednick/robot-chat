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

    this.state = {
      messages: List([])
    };
  }
  /**
 * Make an axios api call and return the promise
 * @param { String } - The message we want to send to the cleverbot API
 * @return { Promise } - A promise object that will eventually contain our response message.
 */
  callServer(message) {
    const self = this;
    const list = this.state.messages;
    
    return axios
      .post('/message', {
        message: message
      })
      .then(function(response) {
        const data = response.data;
        const cleverOutput = data.clever_output;

        let newList = list.push({
          text: message,
          sender: 'me'
        }).push({
          text: cleverOutput,
          sender: 'bot'
        });
        
        self.setState({
          messages: newList
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="app-box">
        <MessageBox messages={this.state.messages}/>
        <InputBox callServer={this.callServer} />
      </div>
    );
  }
}

export default ChatBox;
