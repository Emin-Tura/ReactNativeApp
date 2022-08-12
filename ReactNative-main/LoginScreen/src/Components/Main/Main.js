import React from 'react';
import {View} from 'react-native';
import Input from '../Input/Input';
import styles from './Main.style';

function Main() {
  return (
    <View style={styles.mainContainer}>
      <Input />
    </View>
  );
}

export default Main;
