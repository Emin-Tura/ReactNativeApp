import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.Style';

function Button({text, loading, onPress, icon, theme = 'primary'}) {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={styles[theme].buttonContainer}>
          <Icon name={icon} color="white" size={18} />
          <Text style={styles[theme].buttonText}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default Button;
