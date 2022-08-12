import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './Button.style';

function Button() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.memberStyle}>
          <CheckBox
            style={styles.checkStyle}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{marginLeft: 8}}>Remember Password</Text>
        </View>
        <View style={styles.forgetStyle}>
          <TouchableOpacity>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footStyle}>
        <TouchableOpacity>
          <LinearGradient
            style={styles.gradientStyle}
            colors={['#22d4fe', '#47b0fc']}>
            <Text style={styles.textStyle}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Button;
