import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from '../../Screen/Login/login'
import Verification from '../../Screen/Verification/Verification'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="المتاجر" component={() => (<Text>المتجر </Text>)} />
      <Tab.Screen name="الطلبات" component={() => (<Text>الطلبات </Text>)} />
      <Tab.Screen name="التنبيهات" component={() => (<Text>التنبيهات </Text>)} />
      <Tab.Screen name="صفحتي" component={() => (<Text>صفحتي </Text>)} />
    </Tab.Navigator>
  )
}
function MainStackNavigator() {
  return (
    <NavigationContainer>
      {/* <Login /> */}
      {/* <View>
        <Text>mohannad</Text>
      </View> */}
      <Stack.Navigator initialRouteName='Login'
        headerMode="none"
        animationTypeForReplace="pop"
      >
        <Stack.Screen name='شاشه التسجيل' component={Login} />
        <Stack.Screen
          name='Check'
          component={Verification}
        />
        <Stack.Screen name="main" component={Login} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainStackNavigator



