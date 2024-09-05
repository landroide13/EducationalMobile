import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createStackNavigator }  from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

const GeneralNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default GeneralNavigation

const styles = StyleSheet.create({})