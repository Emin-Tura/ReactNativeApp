import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TextInputs from '../../../../components/TextInput';

import styles from './BoxNameSettings.Style';

function BoxNameSettings() {
  return (
    <View>
      <TextInputs iconName="times-circle-o" />
    </View>
  );
}

export default BoxNameSettings;
