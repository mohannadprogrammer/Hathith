import React, { Component } from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


import Screen from '../../Screen/index'
import Icons from '../../Assets/Icons';
import colors from '../../Assets/colors'


const Stack = createStackNavigator()
const ModaStack = createStackNavigator()
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="صفحتي"
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
      <Tab.Screen name="صفحتي" component={Screen.Personal}
        options={{ tabBarBadge: 3 }}
      />


      <Tab.Screen name="التنبيهات" component={Screen.Notification} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="الطلبات" component={Screen.Orders} />
      <Tab.Screen name="المتاجر" component={Screen.Mainpage} />
    </Tab.Navigator>
  )
}
function MainStackNavigator() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'
      headerMode="none"
      animationTypeForReplace="pop"
    >
      <Stack.Screen name="login" component={Screen.Login} />
      <Stack.Screen name="main" component={Main} />

      <Stack.Screen
        name='Check'
        component={Screen.Verification}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Bill" component={Screen.Bill} />
      <Stack.Screen name="Location" component={Screen.SelectLocation} />
      <Stack.Screen name="Catogray" component={Screen.Catogary} />
      <Stack.Screen name="Store" component={Screen.Store} />
      <Stack.Screen name="Cart" component={Screen.Cart} />
      <Stack.Screen name="Profile" component={Screen.Profile} />

    </Stack.Navigator>

    // {/* </NavigationContainer> */ }
  )
}

function RootStackNavigator() {
  return (
    <NavigationContainer>
      <ModaStack.Navigator initialRouteName='Login'
        headerMode="none"
        animationTypeForReplace="pop"
        mode="modal"
      >
        <ModaStack.Screen name="Bill" component={MainStackNavigator} />

        <ModaStack.Screen name='modal' component={Screen.Boot} />

      </ModaStack.Navigator>

    </NavigationContainer>
  )
}

export default RootStackNavigator



