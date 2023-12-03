import SignUpScreen from "screens/authentication/signup/SignUpScreen"
import {createStackNavigator} from "@react-navigation/stack";
import EmailVerificationScreen from "screens/authentication/signup/EmailVerificationScreen";
import SetPasswordScreen from "screens/authentication/signup/SetPasswordScreen";

const Stack = createStackNavigator();
export default function SignUpNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="EmailVerification" component={EmailVerificationScreen}/>
            <Stack.Screen name="SetPassword" component={SetPasswordScreen}/>
        </Stack.Navigator>
    )
}
