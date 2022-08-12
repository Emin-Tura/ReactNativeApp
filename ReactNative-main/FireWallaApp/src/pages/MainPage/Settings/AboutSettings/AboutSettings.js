import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import InnerInput from '../../../../components/InnerInput';

import styles from './AboutSettings.Style';

function AboutSettings() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <InnerInput title="Box Version" value="1.9121 (g475e709)" />
        <InnerInput title="IP Address" value="10.100.100.65" />
        <InnerInput title="MAC Address" value="02:81:99:d8:c1:c8" />
        <InnerInput title="Release Type" value="Stable Release" />
        <InnerInput title="Last Update" value="8 Jun 2021 07:09" />
        <InnerInput title="App Version" value="1.49.79 (1003)" />
        <InnerInput
          title="License"
          value="Firewalla Red"
          iconName={'chevron-right'}
        />
        <InnerInput title="EID" value="qfGI-yVCFby1e3AD_6JQSg" />
        <InnerInput title="GID" value="blablablabla" />
        <InnerInput title="Cloud Instance" value="v3" />
        <InnerInput
          title="Box Time Zone"
          value="Europe/Istanbul"
          iconName={'chevron-right'}
        />
        <InnerInput title="System Uptime" value="1m 33s" />
      </View>
    </ScrollView>
  );
}

export default AboutSettings;
