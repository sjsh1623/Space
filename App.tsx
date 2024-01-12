import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {PaperProvider} from "react-native-paper";
import AuthNavigation from "navigation/authentication/AuthNavigation";
import BottomCustomNavigation from "./src/navigation/main/BottomCustomNavigation";

type RootStackParamList = {
    AuthNavigation: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        {/*<Stack.Screen name="AuthNavigation" component={AuthNavigation} options={{headerShown: false}}/>*/}
                        <Stack.Screen name="MainNavigation" component={BottomCustomNavigation} options={{headerShown: false}}/>
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
