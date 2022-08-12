import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Button from '../../components/MainButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './MainPage.Style';

function MainPage({navigation}) {
  return (
    <ImageBackground
      source={require('../../../assest/bg.jpg')}
      resizeMode="cover"
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headerText}>Hoşgeldiniz</Text>
          <View style={styles.innerBody}>
            <Button
              text={'Kolay'}
              onPress={() => navigation.navigate('EasyScreen')}
            />
            <Button text={'Orta'} onPress={() => console.log('Orta')} />
            <Button text={'Zor'} onPress={() => console.log('Zor')} />
          </View>
          <Text style={styles.infoText}>Zorluk seviyesini seçiniz...</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default MainPage;
