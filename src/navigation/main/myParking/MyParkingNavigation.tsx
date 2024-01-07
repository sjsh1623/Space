import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Index from "screens/main/myParking";
import PrivateMain from "screens/main/myParking/PrivateMain";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {Searchbar} from 'react-native-paper';
import {SafeAreaView, Text, View} from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function MyParkingNavigation() {
    return (
        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIndicatorStyle: {
                    borderWidth: 1,
                    borderColor: 'black',
                    width: 100,
                    marginLeft: 50,
                },
                tabBarStyle: {
                    height: 60
                },
            })}>
                <Tab.Screen name="bookMark" options={{
                    tabBarLabel: '북마크',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="bookmark-outline" color={color} size={20}/>
                    ),
                }} component={Index}/>
                <Tab.Screen name="private" options={{
                    tabBarLabel: '프라이빗',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="garage-open-variant" color={color} size={20}/>
                    ),
                }} component={PrivateMain}/>
            </Tab.Navigator>
        </SafeAreaView>

    )
        ;
}
