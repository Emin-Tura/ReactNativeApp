import React from 'react';
import styles from './Header.style';

import {Text, View, TextInput, KeyboardAvoidingView} from 'react-native';

function Header() {
  return (
    <View>
      <View style={styles.mainStyle}>
        <TextInput placeholder="username" style={styles.input} />
        <TextInput
          secureTextEntry={true}
          placeholder="password"
          style={styles.input}
        />
      </View>
    </View>
  );
}

export default Header;
