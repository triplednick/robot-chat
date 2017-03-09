import React, { Component } from 'react';
import './MessageBox.css';

import MessageText from '../MessageText/MessageText';

const MessageBox = props => {
  let i = 0;

  const getKey = () => {
    const key = Date.now() + i++;
    return key;
  };

  return (
    <div className="message-box">
      {props.messages.map(val => {
        return <MessageText key={getKey()} {...val} />;
      })}
    </div>
  );
};

export default MessageBox;
