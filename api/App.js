import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TripScreen from './src/screens/Trip'
import TripDetailScreen from './src/screens/TripDetail'
import HomeScreen from './src/screens/Home'
import GiftScreen from './src/screens/Gift'
import GiftDetailScreen from './src/screens/GiftDetail'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TripStack() {
  return (
    <Stack.Navigator
     initialRouteName='Trip'
     screenOptions={{
       headerStyle: { backgroundColor: '#21bf73'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
     }}
    >
      <Stack.Screen name="Trip" component={TripScreen} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} options={{title:'旅遊景點介紹'}} />
    </Stack.Navigator>
  )
}

function GiftStack() {
  return (
    <Stack.Navigator
     initialRouteName='Gift'
     screenOptions={{
       headerStyle: { backgroundColor: '#ed6663'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
     }}
    >
      <Stack.Screen name="Gift" component={GiftScreen} />
      <Stack.Screen name="GiftDetail" component={GiftDetailScreen} options={{title:'農產伴手禮推薦'}} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName='Home'
       screenOptions={({ route }) => ({
         tabBarIcon: ({ color, focused }) => {
           let iconName
           let iconColor
           if(route.name == 'Trip') {
             iconName = focused ? 'route' : 'car-side'
             iconColor = focused ? '#16817a' : '#b0eacd'
           } else if(route.name == 'Home') {
              iconName = focused ? 'street-view' : 'tree'
              iconColor = focused ? '#21bf73' : '#b0eacd'
           } else if(route.name == 'Gift') {
             iconName = focused ? 'donate' : 'gift'
             iconColor = focused ? '#f8615a' : '#b0eacd'
           }
           return <FontAwesome5 name={iconName} size={25} color={iconColor} solid />
         }
       })}
      >
        <Tab.Screen name="Trip" component={TripStack} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gift" component={GiftStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});