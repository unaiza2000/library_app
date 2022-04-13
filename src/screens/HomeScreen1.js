// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import Tabs from "../navigator/tabs";
import BottomTabStack from "../components/BottomTab";


// import DrawerNavigator from "../components/DrawerNavigator";
// import BottomTabStack from "../components/BottomTab";

const HomeScreen1 = () => {
  return (
    <NavigationContainer>
       <BottomTabStack></BottomTabStack>
       {/* <Tabs /> */}
       {/* <Text>unaiza</Text> */}
    </NavigationContainer>
  );
};
export default HomeScreen1;
