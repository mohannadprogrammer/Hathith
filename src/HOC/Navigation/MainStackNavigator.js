import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Login from '../../Screen/Login/login'
import Verification from '../../Screen/Verification/Verification'
import Screen from '../../Screen/index'
import Icons from '../../Assets/Icons';
import colors from '../../Assets/colors'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
function Main() {
  return (
    <Tab.Navigator
      initialRouteName="المتاجر"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'المتاجر') {
            return Icons.Stores(focused ? color : colors.gray);
          } else if (route.name === 'التنبيهات') {
            return Icons.Attention(focused ? color : colors.gray);
          } else if (route.name === 'الطلبات') {
            return Icons.Orders(focused ? color : colors.gray);
          } else {
            return Icons.Person(focused ? color : colors.gray);
          }

          // You can return any component that you like here!
          return null;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="صفحتي" component={Text}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="التنبيهات" component={Screen.Notification} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="الطلبات" component={Screen.Orders} />
      <Tab.Screen name="المتاجر" component={Text} />
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
        <Stack.Screen name="main" component={Main} />
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



