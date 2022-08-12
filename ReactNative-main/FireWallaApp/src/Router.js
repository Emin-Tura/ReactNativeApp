import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import FlashMessage from 'react-native-flash-message';

import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import BoxScreen from './pages/MainPage/BoxScreen/BoxScreen';
import SettingsScreen from './pages/MainPage/Settings/MainSettings';
import BoxNameSettingsScreen from './pages/MainPage/Settings/BoxNameSettings';
import AboutSettingsScreen from './pages/MainPage/Settings/AboutSettings';
import FeatureSettingsScreen from './pages/MainPage/Settings/FeatureSettings';
import NotificationSettingsScreen from './pages/MainPage/Settings/NotificationSettings';

import Loading from './components/Loading';

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
      </Stack.Navigator>
    );
  };

  const MainPage = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="BoxScreen"
          component={BoxScreen}
          options={{
            title: 'Firewalla Box',
            headerStyle: {
              backgroundColor: '#e0dee0',
            },
            headerTitleStyle: {color: '#000'},
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: () => (
              <Icon
                name="home"
                color={'#8f3e42'}
                style={{width: 50, fontSize: 20}}
              />
            ),
            headerRight: () => (
              <Icon
                name="gear"
                color={'#8f3e42'}
                size={20}
                onPress={() => navigation.navigate('SettingsScreen')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f6f6f6'},
            headerShadowVisible: false,
            headerLeft: () => (
              <Icon
                name="chevron-left"
                color={'#8f3e42'}
                style={{width: 50, fontSize: 20}}
                onPress={() => navigation.navigate('BoxScreen')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="BoxNameSettingsScreen"
          component={BoxNameSettingsScreen}
          options={{
            title: '',
            headerStyle: {backgroundColor: '#f6f6f6'},
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingsScreen')}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#8f3e42'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingsScreen')}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#8f3e42'}}>
                  Save
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="AboutSettingsScreen"
          component={AboutSettingsScreen}
          options={{
            title: 'About Firewalla Box',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f6f6f6'},
            headerShadowVisible: false,
            headerLeft: () => (
              <Icon
                name="chevron-left"
                color={'#8f3e42'}
                style={{width: 50, fontSize: 20}}
                onPress={() => navigation.navigate('SettingsScreen')}
              />
            ),
          }}
        />

        <Stack.Screen
          name="FeaturesSettingsScreen"
          component={FeatureSettingsScreen}
          options={{
            title: 'Features',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f6f6f6'},
            headerShadowVisible: false,
            headerLeft: () => (
              <Icon
                name="chevron-left"
                color={'#8f3e42'}
                style={{width: 50, fontSize: 20}}
                onPress={() => navigation.navigate('SettingsScreen')}
              />
            ),
          }}
        />

        <Stack.Screen
          name="NotificationSettingsScreen"
          component={NotificationSettingsScreen}
          options={{
            title: 'Notification',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#f6f6f6'},
            headerShadowVisible: false,
            headerLeft: () => (
              <Icon
                name="chevron-left"
                color={'#8f3e42'}
                style={{width: 50, fontSize: 20}}
                onPress={() => navigation.navigate('SettingsScreen')}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}

      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
