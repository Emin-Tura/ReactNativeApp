import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import InnerInput from '../../../../components/InnerInput';

import styles from './Settings.Style';

function Settings({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerOneContainer}>
        <InnerInput
          title="Box Name"
          value={'FireWalla'}
          onPress={() => navigation.navigate('BoxNameSettingsScreen')}
          iconName={'chevron-right'}
        />
        <InnerInput title="IP Address" value={'10.100.100.65'} />
        <InnerInput
          title="About"
          onPress={() => navigation.navigate('AboutSettingsScreen')}
          iconName={'chevron-right'}
        />
        <InnerInput
          title="What's New"
          iconName={'chevron-right'}
          onPress={() =>
            Linking.openURL(
              'https://help.firewalla.com/hc/en-us/sections/360001462674-Release-Notes',
            )
          }
        />
      </View>
      <View>
        <InnerInput
          theme="secondary"
          title="Features"
          iconName={'chevron-right'}
          onPress={() => navigation.navigate('FeaturesSettingsScreen')}
        />
        <InnerInput
          theme="secondary"
          title="Notifications"
          iconName={'chevron-right'}
          onPress={() => navigation.navigate('NotificationSettingsScreen')}
        />
        <InnerInput
          theme="secondary"
          title="Advanced"
          iconName={'chevron-right'}
        />
        <InnerInput
          theme="secondary"
          title="Help & Support"
          iconName={'chevron-right'}
        />
        <InnerInput
          theme="secondary"
          title="Open in Desktop Browser"
          iconName={'chevron-right'}
        />
      </View>
    </ScrollView>
  );
}

export default Settings;
