import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import First from './Pages/First';
import Second from './Pages/Second';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={First} />
        <Stack.Screen name="SecondScreen" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
