import React from 'react';
import { connect } from 'react-redux';
import addMessage from '../../../actions/actions';
import './InputBox.css';

let InputBox = ({ dispatch, callServer }) => {
  let input;

  return (
    <div className="input-area">
      <form
        onSubmit={e => {
          e.preventDefault();
          const userMessage = input.value.trim();

          if (!userMessage) {
            return;
          }

          let sender = 'user';
          let text = userMessage;

          dispatch(
            addMessage({
              sender,
              text
            })
          );

          const responsePromise = callServer(userMessage);

          responsePromise
            .then(function(response) {
              const data = response.data;
              const cleverOutput = data.clever_output;

              sender = 'bot';
              text = cleverOutput;

              dispatch(
                addMessage({
                  sender,
                  text
                })
              );
            })
            .catch(function(error) {
              console.log(error);
            });

          input.value = '';
        }}
      >
        <div className="text-area">
          <input
            ref={node => {
              input = node;
            }}
            className="message-area"
          />
        </div>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

InputBox = connect()(InputBox);

export default InputBox;
