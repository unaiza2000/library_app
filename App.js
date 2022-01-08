import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/splash";

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: "Splash",  //first component that will be displayed
    defaultNavigationOptions: {
      title: "Library App",
    },
  }
);

export default createAppContainer(navigator);
