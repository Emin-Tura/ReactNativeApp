import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement} from '../../context/Reducer';

function Second() {
  const countValue = useSelector(s => s.counter.value);
  const dispatch = useDispatch();

  const handleCounter = () => {
    dispatch(decrement());
  };

  return (
    <View style={{flex: 0.3}}>
      <Text style={{marginBottom: 55}}>Im Counter Down :{countValue} </Text>
      <Button title="Down" onPress={handleCounter} />
    </View>
  );
}

export default Second;
