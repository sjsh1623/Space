import signUpScreen from "screens/authentication/signUp/signUpScreen"
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function signUpNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={signUpScreen} />
        </Stack.Navigator>
    )
}
