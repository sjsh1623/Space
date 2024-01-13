import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "screens/main/home";
import Search from "screens/main/home/Search";

const HomeNavigation = () => {
    const HomeStackNavigator = createNativeStackNavigator();

    return (
        <HomeStackNavigator.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStackNavigator.Screen
                name="Home"
                component={Home}
            />

            <HomeStackNavigator.Screen
                name="Search"
                component={Search}
                options={{gestureDirection: 'vertical'}}
            />
        </HomeStackNavigator.Navigator>
    )
}
export default HomeNavigation;
