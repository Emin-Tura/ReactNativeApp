import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button/Button';

function Welcome({navigation}) {
  const goToMemberSign = () => {
    navigation.navigate('MemberSignScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>MET Fitness Salonu</Text>
      <Button text="Uye Kaydi Olustur" onPress={goToMemberSign} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
  },
});

export default Welcome;
