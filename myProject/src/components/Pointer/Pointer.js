import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Pointer.Style';

function Pointer({pointer}) {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Puan : {pointer}</Text>
    </View>
  );
}

export default Pointer;
