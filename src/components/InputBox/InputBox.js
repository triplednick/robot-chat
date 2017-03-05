import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.callServer = props.callServer;

    this.state = {
      inputMessage: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    const inputMessage = this.state.inputMessage;

    console.log(inputMessage);
    //this.callServer(inputMessage);
  }
  handleChange(e) {
    this.setState({ inputMessage: e.target.value });
  }
  render() {
    return (
      <div className="input-area">
        <form onSubmit={this.handleSubmit}>
          <div className="text-area">
            <label>
              <textarea
                value={this.state.inputMessage}
                onChange={this.handleChange}
                className="message-area"
              />
            </label>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default InputBox;
