import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScanScreen from './src/screens/ScanScreen'
import DogScreen from './src/screens/DogScreen'
import DogDetailScreen from './src/screens/DogDetailScreen'
import CatScreen from './src/screens/CatScreen'
import CatDetailScreen from './src/screens/CatDetailScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function DogStack() {
  return (
    <Stack.Navigator
     initialRouteName='Dog'
     screenOptions={{
       headerStyle: { backgroundColor: '#024249'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
     }}
    >
      <Stack.Screen name="Dog" component={DogScreen} />
      <Stack.Screen name="DogDetail" component={DogDetailScreen} options={{title:'狗兒豆知識'}} />
    </Stack.Navigator>
  )
}

function CatStack() {
  return (
    <Stack.Navigator
     initialRouteName='Cat'
     screenOptions={{
       headerStyle: { backgroundColor: '#fa744f'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
     }}
    >
      <Stack.Screen name="Cat" component={CatScreen} />
      <Stack.Screen name="CatDetail" component={CatDetailScreen} options={{title:'貓咪豆知識'}} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName='Scan'
       screenOptions={({ route }) => ({
         tabBarIcon: ({ color, focused }) => {
           let iconName
           let iconColor
           if(route.name == 'Dog') {
             iconName = focused ? 'bone' : 'dog'
             iconColor = focused ? '#005082' : '#84a9ac'
           } else if(route.name == 'Scan') {
              iconName = focused ? 'qrcode' : 'barcode'
              iconColor = focused ? '#005082' : '#84a9ac'
           } else if(route.name == 'Cat') {
             iconName = focused ? 'paw' : 'cat'
             iconColor = focused ? '#005082' : '#84a9ac'
           }
           return <FontAwesome5 name={iconName} size={25} color={iconColor} solid />
         }
       })}
      >
        <Tab.Screen name="Dog" component={DogStack} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Cat" component={CatStack} />
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
