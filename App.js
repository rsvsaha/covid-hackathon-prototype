/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen/SignupScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator><Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignupScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
