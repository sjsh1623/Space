import {createStackNavigator} from "@react-navigation/stack";
import signInScreen from "screens/authentication/signIn/signInScreen"
import signUpScreen from "screens/authentication/signUp/signUpScreen"

const Stack = createStackNavigator();
export default function authNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={signInScreen} />
            <Stack.Screen name="SignUp" component={signUpScreen} />
        </Stack.Navigator>
    )
}
