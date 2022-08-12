import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './Reducer';
import state from './State';

function userProvider({children}) {
  const store = createStore(reducer, state);

  return <Provider store={store}>{children}</Provider>;
}

export default userProvider;
