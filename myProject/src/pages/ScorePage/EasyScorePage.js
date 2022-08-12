import React from 'react';
import {View, Text, ImageBackground, TextInput} from 'react-native';

import QueButton from '../../components/QueButton';

import styles from './EasyScorePage.Style';

const EasyScorePage = ({route}) => {
  console.log(route.params);
  const points = route.params;
  return (
    <ImageBackground
      source={require('../../../assest/scorebg.jpg')}
      resizeMode="cover"
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Puanınız</Text>
          </View>
          <Text style={styles.point}>{points}</Text>
          <View>
            <TextInput placeholder="İsminizi Giriniz" style={styles.input} />
          </View>

          <QueButton
            text="Kaydet"
            onPress={
              () =>
                console.log(
                  'Buraya puanı kaydedecek ve scor sayfasına yönlendirecek',
                )
              //Bu syfa tek yapılıp sıralama sayfaları farklı yapılabilir.
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default EasyScorePage;
