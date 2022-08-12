import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {store} from './context/Store';

function Wrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Wrapper;
