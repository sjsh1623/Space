import {Animated, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import PinLocation from "screens/administrator/initialize/PinLocation";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SetLocationDetail from "screens/administrator/initialize/SetLocationDetail";
import {PaperProvider} from "react-native-paper";
import EntryScreen from "./src/screens/authentication/signIn/EntryScreen";
import SocialLoginScreen from "./src/screens/authentication/signIn/SocialLoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        {/*<Stack.Screen name="EntryScreen" component={EntryScreen} options={{headerShown: false}}/>*/}
                        <Stack.Screen name="SocialLoginScreen" component={SocialLoginScreen} options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
