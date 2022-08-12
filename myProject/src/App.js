import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './pages/MainPage';
import EasyPage from './pages/EasyPage';
import EasyScorePage from './pages/ScorePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainPage} />
        <Stack.Screen name="EasyScreen" component={EasyPage} />
        <Stack.Screen name="ScoreScreen" component={EasyScorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
