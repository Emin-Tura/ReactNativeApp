import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './TextBtn.Style';

function TextBtn({text, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TextBtn;
