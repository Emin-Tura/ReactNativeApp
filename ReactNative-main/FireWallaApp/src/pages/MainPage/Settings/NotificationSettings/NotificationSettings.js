import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import InnerInput from '../../../../components/InnerInput';

import styles from './NotificationSettings.Style';

function NotificationSettings() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <InnerInput title="Notifications" toggle={true} />
      </View>
      <Text style={styles.text}>SETTINGS</Text>
      <View style={styles.innerContainer}>
        <InnerInput title="Show Box Name in Notifications" toggle={true} />
      </View>
    </View>
  );
}

export default NotificationSettings;
