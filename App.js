import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./src/screens/Login";
import SplashScreen from "./src/screens/splash";
import SearchByAuthorScreen from "./src/screens/SearchByAuthorScreen";
import SearchByCategoryScreen from "./src/screens/searchByCategory";
import AuthorsShowScreen from "./src/screens/AuthorShowScreen";
import CategoryScreen from "./src/screens/Category";
import CategoryList2 from "./src/components/CategoryList2";
//import HomeScreen from "./src/screens/HomeScreen";


const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Loginprop: Login,
    Authors: SearchByAuthorScreen,
    Category: SearchByCategoryScreen,
    AuthorResultsShow: AuthorsShowScreen,
    Category1: CategoryScreen,
    CategoryList2: CategoryList2,
    //Home: HomeScreen
    
    

  },
  {
    initialRouteName: "Category1",  //first component that will be displayed
    defaultNavigationOptions: {
      title: "Library App",
    },
  }
);

export default createAppContainer(navigator);
