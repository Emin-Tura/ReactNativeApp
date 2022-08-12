import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './QueButton.Style';

function QueButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default QueButton;
