import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import First from './pages/First';
import Second from './pages/Second';
import {useDispatch, useSelector} from 'react-redux';

import {incrementByAmount, decrementByAmount} from './context/Reducer';

function App() {
  const [amount, setAmount] = useState();
  const [amount2, setAmount2] = useState();
  const dispatch = useDispatch();

  const handleCounterIncrement = () => {
    dispatch(incrementByAmount(amount));
  };

  const handleCounterDecrement = () => {
    dispatch(decrementByAmount(amount2));
  };

  return (
    <View style={{flex: 1}}>
      <First />
      <Second />
      <View style={{flex: 0.4, backgroundColor: '#e0e0e0'}}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={e => setAmount(e)}
        />
        <Button title="Increment By Amount" onPress={handleCounterIncrement} />

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={e => setAmount2(e)}
        />
        <Button title="Decrement By Amount" onPress={handleCounterDecrement} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
