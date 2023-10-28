import {Animated, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import PinLocation from "screens/administrator/initialize/PinLocation";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SetLocationDetail from "screens/administrator/initialize/SetLocationDetail";
import {PaperProvider} from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="PinLocation" component={PinLocation} options={{headerShown: false}}/>
                        <Stack.Screen name="SetLocationDetail" component={SetLocationDetail}
                                      options={{headerShown: false}}/>
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
