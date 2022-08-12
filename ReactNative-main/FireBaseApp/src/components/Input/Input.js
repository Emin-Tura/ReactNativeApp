import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.Style';

function Input({placeholder, secureTextEntry, onType, value}) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onType}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default Input;
