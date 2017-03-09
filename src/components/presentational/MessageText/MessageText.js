import React from 'react';
import './MessageText.css';

const MessageText = props => {
  const { text, sender } = props;

  const leftOrRight = sender === 'bot' ? 'floatRight' : 'floatLeft';

  return (
    <div className="message-container">
      <div className={'message hvr-grow-shadow ' + leftOrRight}>
        <p className="content">{`${text}`}</p>
      </div>
      <div className="clear" />
    </div>
  );
};

export default MessageText;
