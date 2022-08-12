import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import InnerInput from '../../../../components/InnerInput';

import styles from './FeatureSettings.Style';

function FeatureSettings() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <InnerInput
          title="Active Protect"
          iconName={'chevron-right'}
          leftIconName={'robot-outline'}
        />
        <InnerInput
          title="Ad Block"
          iconName={'chevron-right'}
          leftIconName={'block-helper'}
        />
        <InnerInput
          title="DDNS"
          iconName={'chevron-right'}
          leftIconName={'map-marker-radius'}
        />
        <InnerInput
          title="Device Port Scan"
          iconName={'chevron-right'}
          leftIconName={'search-web'}
        />
        <InnerInput
          title="Family"
          iconName={'chevron-right'}
          leftIconName={'home'}
        />
        <InnerInput
          title="Firewalla Web"
          iconName={'chevron-right'}
          leftIconName={'web-plus'}
        />
        <InnerInput
          title="Open Ports"
          iconName={'chevron-right'}
          leftIconName={'serial-port'}
        />
        <InnerInput
          title="Dns over HTTPS"
          iconName={'chevron-right'}
          leftIconName={'lock'}
        />
        <InnerInput
          title="DATA Usage"
          iconName={'chevron-right'}
          leftIconName={'chart-box-outline'}
        />
        <InnerInput
          title="New Device Quarantine"
          iconName={'chevron-right'}
          leftIconName={'devices'}
        />
        <InnerInput
          title="VPN Client"
          iconName={'chevron-right'}
          leftIconName={'incognito-circle'}
        />
        <InnerInput
          title="VPN Server"
          iconName={'chevron-right'}
          leftIconName={'vpn'}
        />
      </View>
    </ScrollView>
  );
}

export default FeatureSettings;
