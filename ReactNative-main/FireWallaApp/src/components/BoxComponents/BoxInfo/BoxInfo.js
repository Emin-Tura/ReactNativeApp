import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './BoxInfo.Style';

function BoxInfo({infoText, infoValue, iconName}) {
  return (
    <View style={styles.boxInfo}>
      <Icon name={iconName} size={30} color={'#cc2833'} />
      <View style={styles.innerBoxInfo}>
        <Text
          style={{
            fontWeight: '600',
            color: '#000',
            fontSize: 20,
            marginRight: 5,
          }}>
          {infoValue}
        </Text>
        <Text style={{fontWeight: '500'}}>{infoText}</Text>
      </View>
    </View>
  );
}

export default BoxInfo;
