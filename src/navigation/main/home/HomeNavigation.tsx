import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "screens/main/home";
import Search from "screens/main/home/Search";
import detail from "screens/main/detail";

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

            <HomeStackNavigator.Screen
                name="Detail"
                component={detail}
                options={{gestureDirection: 'vertical'}}
            />
        </HomeStackNavigator.Navigator>
    )
}
export default HomeNavigation;
