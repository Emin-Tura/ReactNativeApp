import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reducers from './Reducers';

const AuthProvider = ({children}) => {
  const [users, setUsers] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@user').then(response => {
      response && setUsers(JSON.parse(response));
      setAuthLoading(false);
    });
  }, []);

  const store = createStore(Reducers, {users, isAuthLoading});

  //  console.log('**************************************');
  // console.log('PROVIDER Im the USER ===> ' + users);

  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
