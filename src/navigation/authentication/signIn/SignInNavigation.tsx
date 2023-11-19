import {createStackNavigator} from "@react-navigation/stack";
import SignInScreen from "screens/authentication/signIn/SignInScreen";
import SocialLoginScreen from "../../../screens/authentication/signIn/SocialLoginScreen";

type AuthStackParmList = {
    SignInScreen: undefined,
    SocialLoginScreen: undefined,

}

const Stack = createStackNavigator<AuthStackParmList>();
export default function SignInNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="SocialLoginScreen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SocialLoginScreen" component={SocialLoginScreen}/>
            <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        </Stack.Navigator>
    )
}
