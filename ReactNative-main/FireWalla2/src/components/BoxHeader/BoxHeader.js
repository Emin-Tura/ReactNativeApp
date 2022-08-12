import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './BoxHeader.style';

function BoxHeader({text, numberValue}) {
  return (
    <View style={styles.innerBoxHeader}>
      <Text>{text}</Text>
      <Text style={{color: '#000', fontWeight: 'bold'}}>{numberValue} </Text>
    </View>
  );
}

export default BoxHeader;
