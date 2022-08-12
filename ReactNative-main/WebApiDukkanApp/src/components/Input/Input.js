import React from 'react';
import {TextInput, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Input.stlye';

function input({
  placeholder,
  value,
  onChangeText,
  iconName,
  changeIcon,
  password,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={password}
      />
      <TouchableWithoutFeedback onPress={changeIcon}>
        <Icon name={iconName} style={styles.icon} />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default input;
