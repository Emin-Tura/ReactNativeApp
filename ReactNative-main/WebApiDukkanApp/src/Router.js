import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const Router = () => {
  const sessionUser = useSelector(s => s.users);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  const dispatch = useDispatch();

  // console.log(
  //   'ROUTERSCREEN IM THE SESSION USERSssssssssssss ===> ' + sessionUser,
  // );

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !sessionUser ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={Login}
            options={{
              title: 'Login',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="ProductsPage"
            component={Products}
            options={{
              title: 'Dukkan',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerRight: () => (
                <Icon
                  name="hand-o-right"
                  color={'white'}
                  size={20}
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
          />
          <Stack.Screen
            name="DetailPage"
            component={Detail}
            options={{
              title: 'Detail',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
