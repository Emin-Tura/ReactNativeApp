import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import FloatingButton from '../components/FloatingButton';

const FloatingActionButton = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/map.png')}
        resizeMode="cover"
        style={{opacity: 0.6, width: '100%', height: '100%'}}
      />
      <FloatingButton style={{bottom: 100}} />
    </View>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
