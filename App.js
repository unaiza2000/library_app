import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./src/screens/Login";
import SplashScreen from "./src/screens/splash";
import SearchByAuthorScreen from "./src/screens/SearchByAuthorScreen";


const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Loginprop: Login,
    Authors: SearchByAuthorScreen,
    

  },
  {
    initialRouteName: "Splash",  //first component that will be displayed
    defaultNavigationOptions: {
      title: "Library App",
    },
  }
);

export default createAppContainer(navigator);
