import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import posed from 'react-native-pose'
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TripScreen from './src/screens/Trip'
import TripDetailScreen from './src/screens/TripDetail'
import HomeScreen from './src/screens/Home'
import FavoritesScreen from './src/screens/Favorites'
import FavoritesDetailScreen from './src/screens/FavoritesDetail'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Scaler = posed.View({ // 點擊縮放
  active: { scale: 1.1 },
  inactive: { scale: 0.9 }
})

function TripStack() {
  return (
    <Stack.Navigator
     initialRouteName='Trip'
     screenOptions={{
       headerStyle: { backgroundColor: '#21bf73'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
      //  headerRight: () => (
      //   <TouchableOpacity style={styles.sideBtn} onPress={() => navigation.toggleDrawer()}>
      //      <Text>Info</Text>
      //   </TouchableOpacity>
      //   )
     }}
    >
      <Stack.Screen name="Trip" component={TripScreen} options={{title: '休閒農場住宿資訊'}} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} options={({ route }) => {
        return { title: `${route.params.passProps.Name}` }
      }} />
    </Stack.Navigator>
  )
}

function FavoritesStack() {
  return (
    <Stack.Navigator
     initialRouteName='Favorites'
     screenOptions={{
       headerStyle: { backgroundColor: '#00a8cc'},
       headerTitleAlign: 'center',
       headerTintColor: '#f7f7f7',
     }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{headerTitle:'收藏景點介紹'}} />
      <Stack.Screen name="FavoritesDetail" component={FavoritesDetailScreen} options={({ route }) => {
        return { headerTitle: `${route.params.passProps.Name}` }
      }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarStyle={styles.tab}
       initialRouteName='Home'
       screenOptions={({ route }) => ({
         tabBarIcon: ({ color, focused }) => {
           let iconName
           let iconColor
           if(route.name == 'Home') {
             iconName = focused ? 'street-view' : 'tree'
             iconColor = focused ? '#21bf73' : '#b0eacd'
           } else if(route.name == 'Trip') {
             return <Scaler pose={focused ? 'active' : 'inactive'}>
               <View style={[styles.mainTab, {backgroundColor: focused ? '#16817a' : '#fff'}]}>
                 <FontAwesome5 name={'car-side'} size={32} color={focused ? '#fff' : '#b0eacd'} solid />
               </View>
               </Scaler>
           } else if(route.name == 'Favorites') {
             iconName = focused ? 'heart' : 'star'
             iconColor = focused ? '#fd5e53' : '#b0eacd'
           }
           return <Scaler pose={focused ? 'active' : 'inactive'}><FontAwesome5 name={iconName} size={24} color={iconColor} solid /></Scaler>
         }
       })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Trip" component={TripStack} />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
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
  tab: {
    height: 120,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  mainTab: {
    borderRadius: 34,
    width: 64,
    height: 64,
    padding: 5,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    padding: 8,
    paddingLeft: 16,
    width: 200,
    height: 32,
  },
  sideBtn: {
    marginRight: 16,
  }
});
