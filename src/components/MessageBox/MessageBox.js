import React from 'react';
import './MessageBox.css';

import Message from '../Message/Message';

const messages = [
  {
    sender: 'nick',
    text: 'message 1'
  },
  {
    sender: 'bot',
    text: 'message 2'
  },
  {
    sender: 'nick',
    text: 'message 3'
  },
  {
    sender: 'bot',
    text: 'message 4'
  },
  {
    sender: 'nick',
    text: 'message 5'
  },
  {
    sender: 'bot',
    text: 'message 6'
  }
];

const MessageBox = () => {
  let i = 0;

  const getKey = () => {
    const key = Date.now() + i++;
    return key;
  };

  return (
    <div className="message-box">
      {messages.map(val => <Message key={getKey()} {...val} />)}
      <div className="clear" />
    </div>
  );
};

export default MessageBox;
