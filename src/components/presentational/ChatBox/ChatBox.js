import React from 'react';
import './ChatBox.css';

import InputBox from '../../containers/InputBox/InputBox';
import MessageContainer
  from '../../containers/MessageContainer/MessageContainer';

const ChatBox = props => {
  return (
    <div className="app-box">
      <MessageContainer />
      <InputBox {...props} />
    </div>
  );
};

export default ChatBox;
