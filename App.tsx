import {Animated, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import PinLocation from "screens/administrator/initialize/PinLocation";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="PinLocation" component={PinLocation} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
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
