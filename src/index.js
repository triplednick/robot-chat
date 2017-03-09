import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import robotApp from './reducers/robotApp';
import App from './components/presentational/App/App';

import './index.css';

let store = createStore(robotApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
