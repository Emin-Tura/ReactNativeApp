import React from 'react';
import {View, Text, Button} from 'react-native';

import auth from '@react-native-firebase/auth';

function App() {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log('User Signed In'))
      .catch(err => console.log(err));
  };
  const signOut = () => {
    auth()
      .signOut()
      .then(res => console.log('User Signed Out'))
      .catch(err => console.log(err));
  };

  const checkUser = () => {
    const user = auth().currentUser;
    console.log(user);
  };
  return (
    <View>
      <Text>Hello FireBase</Text>
      <Button title="SignUp" onPress={signUp} />
      <Button title="SignIn" onPress={signIn} />
      <Button title="SignOut" onPress={signOut} />
      <Button title="CheckUser" onPress={checkUser} />
    </View>
  );
}

export default App;

const user = {
  additionalUserInfo: {isNewUser: true},
  user: {
    displayName: null,
    email: 'jane.doe@example.com',
    emailVerified: false,
    isAnonymous: false,
    metadata: [Object],
    phoneNumber: null,
    photoURL: null,
    providerData: [Array],
    providerId: 'firebase',
    tenantId: null,
    uid: '4URsQkXpU7dd9BMyTLmcGFZY8Ea2',
  },
};
