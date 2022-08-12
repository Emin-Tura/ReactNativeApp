import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/Button';
import Inputs from '../../components/Input';
import styles from './Login.style';
import usePost from '../../hooks/usePost';
import TextBtn from '../../components/TextBtn';

import {View, Text, ImageBackground, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}) {
  const goToRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const dispatch = useDispatch();

  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post('https://fakestoreapi.com/auth/login', values);
  }

  if (data) {
    dispatch({type: 'SET_USER', payload: {user}});
    console.log('Bir datam var');
  }

  if (error) {
    Alert.alert('Uyari', 'Kullanici Bulunamadi');
  }

  const [agree, setAgree] = useState(false);

  const [see, setSee] = useState({icon: 'eye-slash', password: true});

  const changeIcon = () => {
    setSee(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      password: !prevState.password,
    }));
  };

  if (agree) {
    AsyncStorage.setItem('@user', JSON.stringify(user));
  }

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
              <Text style={styles.textHeader}>Hosgeldiniz</Text>
              <View style={styles.textRegister}>
                <Text>Hesabiniz Yok Mu?</Text>
                <TextBtn text="Kayit Ol" onPress={goToRegister} />
              </View>
            </View>

            <Formik
              initialValues={{username: '', password: ''}}
              onSubmit={handleLogin}>
              {({handleChange, handleSubmit, values}) => (
                <>
                  <View style={styles.loginBody}>
                    <Inputs
                      placeholder="EminTura"
                      label="Kullanici Adiniz"
                      onChangeText={handleChange('username')}
                      iconName="user"
                      value={values.email}
                    />
                    <Inputs
                      placeholder="********"
                      label="Parola"
                      onChangeText={handleChange('password')}
                      password={see.password}
                      passwordLength={8}
                      iconName={see.icon}
                      changeIcon={changeIcon}
                      value={values.password}
                    />
                  </View>
                  <View style={styles.loginFoot}>
                    <View style={styles.textRegister}>
                      <CheckBox
                        style={styles.checkBox}
                        value={agree}
                        onValueChange={() => setAgree(!agree)}
                      />
                      <Text>Beni Hatirla</Text>
                    </View>

                    {/* <TextBtn text="Sifremi Unuttum" /> */}
                  </View>
                  <Button
                    text="Login"
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;

const user = {
  id: 1,
  email: 'John@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'John',
    lastname: 'Doe',
  },
  address: {
    city: 'kilcoole',
    street: '7835 new road',
    number: 3,
    zipcode: '12926-3874',
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
  },
  phone: '1-570-236-7033',
};
