import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './BoxProps.Style';

function BoxProps({propsName, iconName}) {
  return (
    <View style={styles.boxProps}>
      <TouchableWithoutFeedback>
        <View style={styles.innerBoxProps}>
          <Icon name={iconName} size={30} color={'#595859'} />
          <Text
            style={{
              fontWeight: '500',
              fontSize: 12,
              marginVertical: 2,
            }}>
            {propsName}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default BoxProps;
