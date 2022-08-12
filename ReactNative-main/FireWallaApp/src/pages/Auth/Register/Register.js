import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import Button from '../../../components/Button/Button';
import Inputs from '../../../components/Input/Input';
import styles from './Register.style';

import auth from '@react-native-firebase/auth';

import {Formik} from 'formik';

import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import TextBtn from '../../../components/TextBtn';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

function Register({navigation}) {
  const [loading, setLoading] = useState(false);

  const [see, setSee] = useState({icon: 'eye-slash', password: true});

  const changeIcon = () => {
    setSee(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye',
      password: !prevState.password,
    }));
  };
  async function handleFormSubmit(formValues) {
    if (
      formValues.password &&
      formValues.repassword &&
      formValues.usermail !== ''
    ) {
      if (formValues.password !== formValues.repassword) {
        showMessage({
          message: 'Şifreler Uyuşmuyor',
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
          message: 'Kullanıcı Oluşturuldu',
          type: 'success',
        });
        setLoading(false);
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
            <View style={styles.innerRegisterBody}>
              <Text style={styles.textHeader}>KAYIT OL</Text>
              <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}>
                {({values, handleChange, handleSubmit}) => (
                  <>
                    <View>
                      <Inputs
                        onChangeText={handleChange('usermail')}
                        placeholder="example@gmail.com"
                        label="E-posta Adresiniz"
                        iconName="envelope"
                        value={values.usermail}
                      />

                      <Inputs
                        onChangeText={handleChange('password')}
                        placeholder="********"
                        label="Parola"
                        value={values.password}
                        iconName={see.icon}
                        password={see.password}
                        changeIcon={changeIcon}
                      />
                      <Inputs
                        onChangeText={handleChange('repassword')}
                        placeholder="********"
                        label="Parola (Tekrar)"
                        value={values.repassword}
                        password={see.password}
                        changeIcon={changeIcon}
                      />
                    </View>
                    <View style={styles.footer}>
                      <Button
                        text="Kayıt Ol"
                        onPress={handleSubmit}
                        loading={loading}
                      />
                      <View style={styles.textFooter}>
                        <Text>Zaten Hesabiniz Var Mı? &mdash; </Text>
                        <TextBtn
                          text="Giriş Yap"
                          onPress={() => navigation.navigate('LoginScreen')}
                        />
                      </View>
                    </View>
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

export default Register;
