import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './pages/Auth/Login';
import SignScreen from './pages/Auth/Sign';
import MessagesScreen from './pages/Messages';
import colors from './styles/colors';

import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

function App() {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      console.log(user);
      setUserSession(!!user); // iki tane ! anlami bana bir deger geliyorsa true gelmiyorsa false olarak deger dondursun
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign" component={SignScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              headerTitleAlign: 'center',
              headerTintColor: colors.darkgreen,
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.darkgreen}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        </Stack.Navigator>
      )}

      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
