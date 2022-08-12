import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Login from './pages/Login';
import Register from './pages/Register';
import BoxScreen from './pages/BoxScreen';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  const dispatch = useDispatch();

  console.log(userSession);
  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={Login} />
          <Stack.Screen name="RegisterScreen" component={Register} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
          }}>
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
              headerLeft: () => (
                <Icon name="home" color={'#8f3e42'} size={20} />
              ),
              headerRight: () => (
                <Icon
                  name="hand-o-right"
                  color={'#8f3e42'}
                  size={20}
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
