import AsyncStorage from '@react-native-async-storage/async-storage';

function reducers(state, action) {
  switch (action.type) {
    case 'SET_USER':
      const {user} = action.payload;
      return {...state, user};
    case 'REMOVE_USER':
      AsyncStorage.removeItem('@user');
      return {...state, user};

    default:
      return state;
  }
}

export default reducers;
