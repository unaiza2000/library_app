import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { createAppContainer, NavigationActions, withNavigation } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";


const HomeScreen2 = ({ navigation}) => {
  return (
    <View>
      <Text></Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate(
            'NestedNavigator1',
            {},
            NavigationActions.navigate({routeName: 'Loginprop'})
          )}
        />

        <Button
          title="Search By Categories"
          onPress={() => navigation.navigate("Category1")}
        />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen2;
