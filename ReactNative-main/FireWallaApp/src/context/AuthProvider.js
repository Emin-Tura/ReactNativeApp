import React, {useState, useEffect} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@user').then(response => {
      response && setUser(JSON.parse(response));
      setAuthLoading(false);
    });
  }, []);

  const store = createStore(reducers, {user, isAuthLoading});
  return <Provider store={store}>{children}</Provider>;
}

export default AuthProvider;
