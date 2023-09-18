import {createStackNavigator} from "@react-navigation/stack";
import signInNavigation from "navigation/authentication/signIn/signInNavigation";
import signUpNavigation from "navigation/authentication/signUp/signUpNavigation";

const Stack = createStackNavigator();
export default function authNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignInNav" component={signInNavigation} />
            <Stack.Screen name="SignUpNav" component={signUpNavigation} />
        </Stack.Navigator>
    )
}
