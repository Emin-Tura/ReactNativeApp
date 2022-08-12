import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.style';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
function Inputs({
  label,
  onChangeText,
  placeholder,
  password,
  passwordLength,
  iconName,
  changeIcon,
  value,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <Input
          autoCapitalize="none"
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={password}
          maxLength={passwordLength}
          style={{fontSize: 12}}
          rightIcon={
            <Icon name={iconName} style={styles.icon} onPress={changeIcon} />
          }
          value={value}
        />
      </View>
    </View>
  );
}

export default Inputs;
