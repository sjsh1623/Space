import {createStackNavigator} from "@react-navigation/stack";
import SignInNavigation from "navigation/authentication/signIn/SignInNavigation";
import SignUpNavigation from "navigation/authentication/signUp/SignUpNavigation";
import EntryScreen from "../../screens/authentication/signIn/EntryScreen";

type AuthStackParamList = {
    EntryScreen: undefined,
    SignInNav: undefined,
    SignUpNav: undefined
}
const Auth = createStackNavigator<AuthStackParamList>();
export default function AuthNavigation() {
    return (
        <Auth.Navigator>
            <Auth.Screen name="EntryScreen" component={EntryScreen} options={{headerShown: false}}/>
            <Auth.Screen name="SignInNav" component={SignInNavigation} options={{headerShown: false}}/>
            <Auth.Screen name="SignUpNav" component={SignUpNavigation} options={{headerShown: false}}/>
        </Auth.Navigator>
    )
}
