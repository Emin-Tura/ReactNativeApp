import React, {useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './InnerInput.Style';

function InnerInput({
  title,
  value,
  theme = 'primary',
  onPress,
  iconName,
  leftIconName,
  toggle,
  enabled,
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles[theme].container}>
      <TouchableOpacity style={styles[theme].innerInput} onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles[theme].title}>
            <Icon name={leftIconName} color={'#595859'} size={25} />
          </Text>
          <Text style={styles[theme].title}>{title}</Text>
        </View>
        <View style={styles[theme].rightValue}>
          <Text style={styles[theme].title}>{value}</Text>
          <Icon name={iconName} color={'#d0d0d0'} size={25} />
          {toggle && (
            <Switch
              trackColor={{false: '#f4f3f4', true: '#1b9be4'}}
              thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default InnerInput;
