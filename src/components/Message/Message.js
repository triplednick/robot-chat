import React from 'react';
import './Message.css';

const Message = props => {
  const { text, sender } = props;

  const leftOrRight = sender === 'bot' ? 'floatRight' : 'floatLeft';

  return (
    <div className={'message ' + leftOrRight}>
      {`${text}`}
    </div>
  );
};

export default Message;
