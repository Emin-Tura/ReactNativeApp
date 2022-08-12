import React from 'react';
import {Button, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
//Use selector stacklere ulasmami sagliyor
//useDispatch reducerlara ulasmami sagliyor

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
    case 'DOWN_COUNTER':
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}

function App() {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View>
        <First />
        <Second />
      </View>
    </Provider>
  );
}

function First() {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();
  const handleCounter = () => {
    dispatch({type: 'UPDATE_COUNTER'});
  };

  return (
    <View>
      <Text>First: {counter}</Text>
      <Button title="Update" onPress={handleCounter} />
    </View>
  );
}

function Second() {
  const counter = useSelector(selector => selector.counter);
  const dispatch = useDispatch();

  const downCounter = () => {
    dispatch({type: 'DOWN_COUNTER'});
  };

  return (
    <View>
      <Text>Second: {counter}</Text>
      <Button title="Down" onPress={downCounter} />
    </View>
  );
}

export default App;
