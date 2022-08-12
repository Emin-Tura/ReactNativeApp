import React from 'react';
import {View, Text, Button} from 'react-native';

import database from '@react-native-firebase/database';

function realtime() {
  const checkDB = () => {
    const reference = database().ref('books/2/writer');
    reference.once('value').then(snapshot => {
      const response = snapshot.val();
      console.log(response);
    });
  };

  const listenDB = () => {
    const reference = database().ref('books/');
    reference.on('value', snapshot => {
      console.log(snapshot.val());
    });
  };

  const setDB = () => {
    const reference = database().ref('car/rentable');
    reference.set({
      brand: 'Audi',
      model: 'A8',
      price: '128',
    });
  };
  const updateDB = () => {
    const reference = database().ref('car/rentable');
    reference.update({
      brand: 'Audi',
      model: 'A2',
      price: '128',
    });
  };

  const pushDB = () => {
    const reference = database().ref('car/rentable');
    reference.push({
      brand: 'Passat',
      model: '3',
      price: '12',
    });
  };
  return (
    <View>
      <Text>REALTIME</Text>
      <Button title="Check DB" onPress={checkDB} />
      <Button title="Listen DB" onPress={listenDB} />
      <Button title="Set DB" onPress={setDB} />
      <Button title="Update DB" onPress={updateDB} />
      <Button title="Push DB" onPress={pushDB} />
    </View>
  );
}

export default realtime;
