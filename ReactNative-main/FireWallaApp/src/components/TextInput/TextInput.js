import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './TextInput.Style';

function TextInputs({title, value, onPress, iconName}) {
  return (
    <View style={styles.container}>
      <Input
        placeholder="FireWalla"
        inputContainerStyle={styles.inputContainerStyle}
        rightIcon={
          <Icon name={iconName} style={styles.iconStyle} onPress={null} />
        }
      />
    </View>
  );
}

export default TextInputs;
