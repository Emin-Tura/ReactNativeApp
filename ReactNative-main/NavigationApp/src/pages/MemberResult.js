import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button/Button';

function MemberResult({route, navigation}) {
  const {user} = route.params;

  const goBackHome = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View>
      <Text style={styles.message}>Kayit Tamamlandi</Text>
      <Text style={styles.label}>Uye Adi: {user.name}</Text>
      <Text style={styles.label}>Uye Soyadi: {user.userSurName}</Text>
      <Text style={styles.label}>Uye Yasi: {user.userAge}</Text>
      <Button text="Anasayfaya Don" onPress={goBackHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default MemberResult;
