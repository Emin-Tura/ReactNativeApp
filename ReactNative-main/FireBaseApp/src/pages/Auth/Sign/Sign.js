import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import auth from '@react-native-firebase/auth';

import {Formik} from 'formik';

import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import styles from './Sign.Style';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function Sign({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Sifreler Uyusmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);

      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanici Olusturuldu',
        type: 'success',
      });
      navigation.navigate('Login');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello Im Sign Screen</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              value={values.usermail}
              placeholder="e-postanizi giriniz"
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="sifrenizi giriniz"
              secureTextEntry={true}
            />
            <Input
              onType={handleChange('repassword')}
              value={values.repassword}
              placeholder="sifrenizi tekrar giriniz"
              secureTextEntry={true}
            />
            <Button text="Sign" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Go Back" theme="secondary" onPress={handleLogin} />
    </View>
  );
}

export default Sign;
