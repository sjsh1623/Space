import SignUpScreen from "screens/authentication/signup/SignUpScreen"
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function SignUpNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}
