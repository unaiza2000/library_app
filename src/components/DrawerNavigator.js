// ./navigation/DrawerNavigator.js

import React from "react";
import {StyleSheet} from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import ChangePassword from "./ChangePassword";
import Logout from "./Logout";

//import { ContactStackNavigator } from "./StackNavigator";
//import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        initialRouteName="HomeScreen"    
    >
      <Drawer.Screen name="Change Password" component={ChangePassword} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({

})
export default DrawerNavigator;