import React from "react";
import { StyleSheet } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { withNavigation } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from "../screens/HomeScreen";
import HomeScreen2 from "../screens/HomeScreen";
import SearchByAuthorScreen from "../screens/SearchByAuthorScreen";
// import SplashScreen from "react-native-splash-screen";

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen2"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#29a9df',
          inactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#e0e0e0',
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            elevation: 0,
            borderRadius: 10,
            height:50,
            ...styles.shadow
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: 16,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen2}
          options={{
            // headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={SearchByAuthorScreen}
          options={{
            // headerShown: false,
            tabBarLabel: 'Serach By Author',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-search"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#7f5df0',
      shadowOffset:{
        width:0,
        height:10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }
  })

export default BottomTabStack;