import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import styles from './Input.style';

import Header from '../Header/Header';
import Button from '../Button/Button';

function Input() {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.headerStyle}>SIGN IN</Text>
      <Header />
      <Button />
    </View>
  );
}

export default Input;
