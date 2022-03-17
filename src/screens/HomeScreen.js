// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "../components/DrawerNavigator";
import BottomTabStack from "../components/BottomTab";

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <BottomTabStack /> */}
    </NavigationContainer>
  );
};
export default HomeScreen;
