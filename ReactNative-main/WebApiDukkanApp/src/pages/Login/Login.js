import React, {useState} from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import {useDispatch} from 'react-redux';

import {Formik} from 'formik';
import Config from 'react-native-config';
import styles from './Login.Style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost';

function Login({navigation}) {
  const [see, setSee] = useState({icon: 'eye', password: true});

  const changeIcon = () => {
    setSee(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      password: !prevState.password,
    }));
  };

  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
    console.log(Config.API_AUTH_URL + '/login');
  }
  if (error) {
    Alert.alert('Uyari', 'Kullanici Bulunamadi');
  }

  if (data) {
    console.log(data);
    dispatch({type: 'SET_USER', payload: {user}});
    //   navigation.navigate();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../../assets/login.png')}
            />
          </View>

          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={handleLogin}>
            {({handleSubmit, handleChange, values}) => (
              <View style={styles.bodyContainer}>
                <Input
                  placeholder="Kullanici Adini Giriniz"
                  value={values.username}
                  onChangeText={handleChange('username')}
                  iconName="user"
                />
                <Input
                  placeholder="Sifrenizi Giriniz"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  password={see.password}
                  iconName={see.icon}
                  changeIcon={changeIcon}
                />

                <Button
                  text="Giris Yap"
                  onPress={handleSubmit}
                  loading={loading}
                />
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
