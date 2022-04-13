import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SearchByAuthorScreen from '../screens/SearchByAuthorScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
          // initialRouteName="HomeScreen"
          //screensOptions={{
            // tabBarShowLabel: false,
            // tabBarActiveTintColor: 'black',
            // tabBarInactiveTintColor: 'gray',
            // tabBarStyle:  {
            //   position: 'absolute',
            //   bottom: 25,
            //   left: 20,
            //   right: 20,
            //   elevation: 0,
            //   borderRadius: 15,
            //   height: 90,
            //   backgroundColor: '#e0e0e0',
            //   ...styles.shadow,
            // },
            // labelStyle: {
            //   textAlign: 'center',
            //   // fontSize: 16,
            // },
        //}}
        >
          <Tab.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons name="home" color='#29a9df' size='26' />
                ),
                // tabBarIcon: 
                  // <Icon size={24} color="white" name="movie" />
              //   tabBarIcon: ({focused}) => (
              //       // <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              //       //   {/* <Image /> */}
              //       //   <Image 
              //       //     source={require('../../assets/icon.png')}
              //       //     style={{
              //       //       width: 25,
              //       //       height: 25,
              //       //       //  tintColor: focused ? '#29a9df' : '#748c94',
              //       //     }}
              //       //     />
              //       //     {/* <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Home</Text> */}
              //       // </View>
              // ),
            }}
          
          />
          <Tab.Screen 
              name="Search" 
              component={SearchByAuthorScreen}
              options={{
                tabBarLabel: 'Search',
                // tabBarIcon: ({ color, size }) => (
                //   <MaterialCommunityIcons name="book-search" color={color} size={size} />
                // ),
              }}
              />
        </Tab.Navigator>
      );
}

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

export default Tabs;