import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./src/screens/Login";
import SearchByAuthorScreen from "./src/screens/SearchByAuthorScreen";
import SearchByCategoryScreen from "./src/screens/searchByCategory";
import AuthorsShowScreen from "./src/screens/AuthorShowScreen";
import CategoryScreen from "./src/screens/Category";
import CategoryList2 from "./src/components/CategoryList2";
import HomeScreen from "./src/screens/HomeScreen";
import App from "./src/screens/splash_screen";
import HomeScreen1 from "./src/screens/HomeScreen1";
import HomeScreen2 from "./src/screens/HomeScreen";


const navigator = createStackNavigator(
  {
    Splash: App,
    Loginprop: Login,
    Authors: SearchByAuthorScreen,
    Category: SearchByCategoryScreen,
    AuthorResultsShow: AuthorsShowScreen,
    Category1: CategoryScreen,
    Home: HomeScreen1,
    
  },
  {
    initialRouteName: "Splash",  //first component that will be displayed
    defaultNavigationOptions: {
      title: "Library App",
    },
  }
);

export default createAppContainer(navigator);
