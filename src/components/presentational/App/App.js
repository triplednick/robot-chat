import React from 'react';
import './App.css';
import ChatBox from '../ChatBox/ChatBox';
import { callServer } from '../../../utils/util';

const App = () => {
  return (
    <div>
      <ChatBox callServer={callServer} />
    </div>
  );
};

export default App;
