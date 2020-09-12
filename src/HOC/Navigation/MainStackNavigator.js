import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../../Screen/Login/login'
import Check from '../../Screen/Login/Check'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='شاشه التسجيل' component={Login} />
        <Stack.Screen
          name='Check'
          component={Check}
          options={{ title: 'Check Screen' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator



