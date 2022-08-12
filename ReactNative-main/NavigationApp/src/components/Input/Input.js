import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.styles';
function Input({label, onChangeText, placeholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </View>
  );
}

export default Input;
