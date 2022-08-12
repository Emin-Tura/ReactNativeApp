import React, {useState} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import Button from '../../components/Button/Button';
import Inputs from '../../components/Input/Input';
import styles from './Register.style';

function Register({navigation}) {
  const goToHome = () => {
    navigation.goBack();
  };
  const [see, setSee] = useState({icon: 'eye-slash', password: true});

  const changeIcon = () => {
    setSee(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      password: !prevState.password,
    }));
  };

  return (
    <ImageBackground
      source={require('../../../assets/bg.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.innerLoginBody}>
            <View style={styles.loginHeader}>
              <Text style={styles.textHeader}>SIGN UP</Text>
            </View>
            <View style={styles.loginBody}>
              <Inputs
                placeholder="Muhammed Emin"
                label="Adiniz"
                iconName="user-edit"
              />

              <Inputs
                placeholder="example@gmail.com"
                label="E-posta Adresiniz"
                iconName="envelope"
              />
              <Inputs
                placeholder="******"
                label="Parola"
                password={see.password}
                iconName={see.icon}
                changeIcon={changeIcon}
              />
            </View>

            <Button text="Sign In" onPress={goToHome} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Register;
