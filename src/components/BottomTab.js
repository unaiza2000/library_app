import React from "react";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import { ContactStackNavigator } from "./StackNavigator";
//import TabNavigator from "./TabNavigator";

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: '#09AFDF',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#e0e0e0',
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: 16,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home Screen',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore Screen',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
      </Tab.Navigator>
    );
  };

export default DrawerNavigator;