import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, incrementByAmount} from '../../context/Reducer';

function First() {
  const countValue = useSelector(s => s.counter.value);
  const dispatch = useDispatch();

  const handleCounter = () => {
    dispatch(increment());
  };

  return (
    <View style={{flex: 0.3, backgroundColor: '#d0d0d0'}}>
      <Text style={{marginBottom: 55}}>Im Counter Up: {countValue}</Text>
      <Button title="Up" onPress={handleCounter} />
    </View>
  );
}

export default First;
