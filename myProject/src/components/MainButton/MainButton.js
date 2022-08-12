import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './MainButton.Style';

function MainButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default MainButton;
