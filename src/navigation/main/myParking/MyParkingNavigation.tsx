import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyParkingMain from "screens/main/myParking/PrivateMain";
import PrivateMain from "screens/main/myParking/PrivateMain";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function MyParkingNavigation() {
    return (
        <Tab.Navigator style={{marginTop: '12%'}}   screenOptions={({ route }) => ({
            tabBarIndicatorStyle : {
                borderWidth: 1,
                borderColor: 'black',
                width: 100,
                marginLeft: 50
            },
        })}>
            <Tab.Screen name="북마크" component={MyParkingMain}/>
            <Tab.Screen name="프라이빗" component={PrivateMain}/>
        </Tab.Navigator>
    );
}
