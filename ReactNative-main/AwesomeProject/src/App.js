import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Card title="Muhammed Emin" text="Merhabaaa" />
      <Card title="Eddard Stark" text="Winter is coming..." />
      <Card title="Arif Isik" text="Uzaylilar tarafindan kacirildim" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});

export default App;
