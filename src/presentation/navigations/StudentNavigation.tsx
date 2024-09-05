import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator }  from '@react-navigation/stack';

const Stack = createStackNavigator();

const StudentNavigation = () => {
  return (
    <View>
      <Text>StudentNavigation</Text>
    </View>
  )
}

export default StudentNavigation

const styles = StyleSheet.create({})