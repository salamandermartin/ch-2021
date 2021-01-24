import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from './src/HomeScreen';
import InputScreen from './src/InputScreen';
import SearchScreen from './src/SearchScreen';
import ProfileScreen from './src/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name = "Record"
          component = {InputScreen}
          options = {{ title: 'Record'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
