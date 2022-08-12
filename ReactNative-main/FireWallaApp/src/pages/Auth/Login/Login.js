import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../../components/Button';
import Inputs from '../../../components/Input';
import styles from './Login.style';
import TextBtn from '../../../components/TextBtn';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';

import auth from '@react-native-firebase/auth';

import {Formik} from 'formik';

import {showMessage} from 'react-native-flash-message';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialFormValues = {
  usermail: '',
  password: '',
  rememberMe: false,
};

function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  const [see, setSee] = useState({icon: 'eye-slash', password: true});
  const changeIcon = () => {
    setSee(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      password: !prevState.password,
    }));
  };

  const [agree, setAgree] = useState(false);
  const toggleRememberMe = () => {
    if (agree) {
      initialFormValues.rememberMe = false;
    } else {
      initialFormValues.rememberMe = true;
    }
    setAgree(!agree);
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password && formValues.usermail !== '') {
      try {
        setLoading(true);
        await auth().signInWithEmailAndPassword(
          formValues.usermail,
          formValues.password,
        );
        setLoading(false);
        navigation.navigate('MainPage');
        formValues.password = '';
        formValues.usermail = '';
        // dispatch({type: 'SET_USER', payload: {formValues}});
      } catch (error) {
        showMessage({
          message: authErrorMessageParser(error.code),
          type: 'danger',
        });
        setLoading(false);
      }
    } else {
      showMessage({
        message: authErrorMessageParser('Lütfen Boş Alanları Doldurunuz...'),
        type: 'danger',
      });
    }
  }

  return (
    <ImageBackground
      source={require('../../../../assets/bg2.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../../../assets/AAA.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>

        <View style={styles.body}>
          <ScrollView>
            <View style={styles.innerLoginBody}>
              <View style={styles.loginHeader}>
                <Text style={styles.textHeader}>Hoşgeldiniz</Text>
                <View style={styles.textRegister}>
                  <Text>Hesabınız Yok Mu? &mdash; </Text>
                  <TextBtn
                    text="Kayıt Ol"
                    onPress={() => navigation.navigate('RegisterScreen')}
                  />
                </View>
              </View>

              <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}>
                {({handleChange, handleSubmit, values}) => (
                  <>
                    <View style={styles.loginBody}>
                      <Inputs
                        placeholder="example@gmail.com"
                        label="E-posta Adresiniz"
                        onChangeText={handleChange('usermail')}
                        iconName="user"
                        value={values.usermail}
                      />
                      <Inputs
                        placeholder="********"
                        label="Parola"
                        onChangeText={handleChange('password')}
                        iconName={see.icon}
                        password={see.password}
                        changeIcon={changeIcon}
                        value={values.password}
                      />
                    </View>
                    <View style={styles.loginFoot}>
                      <View style={styles.textRegister}>
                        <CheckBox
                          style={styles.checkBox}
                          value={agree}
                          onValueChange={toggleRememberMe}
                        />
                        <Text>Beni Hatirla</Text>
                      </View>
                    </View>
                    <Button
                      text="Giriş Yap"
                      onPress={handleSubmit}
                      loading={loading}
                    />
                    <View style={{marginTop: 20}}></View>
                  </>
                )}
              </Formik>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;
