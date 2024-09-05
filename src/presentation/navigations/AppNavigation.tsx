import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import  GeneralNavigation  from './GeneralNavigation';
import  StudentNavigation  from './StudentNavigation';

interface Props{
    userToken: string
}

const AppNavigation = ({ userToken }: Props) => {
  return (
    <NavigationContainer>
        { userToken == null ? <GeneralNavigation /> : <StudentNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})
