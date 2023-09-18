import signInScreen from "screens/authentication/signIn/signInScreen"
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function signInNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={signInScreen} />
        </Stack.Navigator>
    )
}
