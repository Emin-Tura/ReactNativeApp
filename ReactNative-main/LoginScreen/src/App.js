import React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Main from './Components/Main';
import styles from './styles/styles';

function App() {
  return (
    <View>
      <LinearGradient
        colors={['#f9a55f', '#f8665c']}
        style={styles.centerAlign}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </LinearGradient>
      <Main />
    </View>
  );
}

export default App;
