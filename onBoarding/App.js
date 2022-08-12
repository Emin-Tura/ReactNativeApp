import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Onboarding from './src/components/Onboarding';

function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
