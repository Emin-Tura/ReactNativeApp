import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

function Button({onPress, text, loading}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator color={'blue'} />
      ) : (
        <Text style={styles.textBtn}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
