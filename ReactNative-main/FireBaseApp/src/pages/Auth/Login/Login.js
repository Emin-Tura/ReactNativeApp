import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import auth from '@react-native-firebase/auth';

import {Formik} from 'formik';

import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import styles from './Login.Style';

const initialFormValues = {
  usermail: '',
  password: '',
};

function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('Sign');
  };

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('Messages');
    } catch (error) {
      console.log(error);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello Im Login Screen</Text>
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
            <Button text="Login" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Sign" theme="secondary" onPress={handleSignUp} />
    </View>
  );
}

export default Login;
