import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Counter.Style';

function Counter({timer}) {
  return (
    <View>
      <Text style={styles.counter}>{timer}</Text>
    </View>
  );
}

export default Counter;
