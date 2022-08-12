import React from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingActionButton from './pages/FloatingActionButton';

const App = () => {
  return (
    <View style={styles.container}>
      <FloatingActionButton />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
