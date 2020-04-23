import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TripScreen from './src/screens/Trip'
import TripDetailScreen from './src/screens/TripDetail'
import FlightScreen from './src/screens/Flight'
import ProfileScreen from './src/screens/Profile'
import ProfileDetailScreen from './src/screens/ProfileDetail'

//use redux
import configureStore from './src/redux/store'
import { StoreContext } from 'redux-react-hook'

const store = configureStore()

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TripStack() {
  return (
    <Stack.Navigator
     initialRouteName='Trip'
     screenOptions={{
       headerStyle: { backgroundColor: '#0073b0'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
     }}
    >
      <Stack.Screen name="Trip" component={TripScreen} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} options={{title:'景點介紹'}} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator
     initialRouteName='Profile'
     screenOptions={{
       headerStyle: { backgroundColor: '#0073b0'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
     }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{title:'行程列表'}} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName='Profile'
       screenOptions={({ route }) => ({
         tabBarIcon: ({ color, focused }) => {
           let iconName
           let iconColor
           if(route.name == 'Trip') {
             iconName = focused ? 'door-open' : 'door-closed'
             iconColor = focused ? '#005082' : '#84a9ac'
           } else if(route.name == 'Flight') {
              iconName = focused ? 'plane-departure' : 'plane'
              iconColor = focused ? '#005082' : '#84a9ac'
           } else if(route.name == 'Profile') {
             iconName = focused ? 'user-edit' : 'user-cog'
             iconColor = focused ? '#005082' : '#84a9ac'
           }
           return <FontAwesome5 name={iconName} size={25} color={iconColor} solid />
         }
       })}
      >
        <Tab.Screen name="Trip" component={TripStack} />
        <Tab.Screen name="Flight" component={FlightScreen} />
        <Tab.Screen name="Profile" component={ProfileStack} />
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

export default MyApp = () => (
  <StoreContext.Provider value={store}>
    <App/>
  </StoreContext.Provider>
)