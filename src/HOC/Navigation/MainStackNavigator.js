import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../../Screen/Login/login'
import Verification from '../../Screen/Verification/Verification'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      {/* <Login /> */}
      {/* <View>
        <Text>mohannad</Text>
      </View> */}
      <Stack.Navigator initialRouteName='Login' headerMode="none">
        <Stack.Screen name='شاشه التسجيل' component={Login} />
        <Stack.Screen
          name='Check'
          component={Verification}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator



