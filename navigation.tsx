import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import homeScreen from "./screens/homeScreen";
import settingsScreen from "./screens/settingsScreen";
import stackScreen from "./screens/stackScreen";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
   return (
     <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen"
      >
        <HomeStackNavigator.Screen
           name="HomeScreen"
           component={homeScreen}
        />
        <HomeStackNavigator.Screen
           name="Stack"
           component={stackScreen}
           options={{
            headerBackTitleVisible:false
           }}
        />
     </HomeStackNavigator.Navigator>
   )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
     initialRouteName="Home"
     screenOptions={{
         tabBarActiveTintColor: 'red',

     }}
    >
      <Tab.Screen 
      name="Home" 
      component={MyStack}
      options={{
        tabBarLabel: 'Feed',
        tabBarIcon: ({ color, size}) => (
           <MaterialCommunityIcons name="home" color={color} size={30} />
        ),
        tabBarBadge: 6,
        headerShown: false,
      }} 
      />
      <Tab.Screen 
      name="Settings" 
      component={settingsScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size}) => (
           <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
        ),
      }} 
      />

    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


