import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyParkingMain from "screens/main/myParking/MyParkingMain";
import PrivateMain from "screens/main/myParking/PrivateMain";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {Searchbar} from 'react-native-paper';
import {SafeAreaView, Text} from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function MyParkingNavigation() {
    return (
        <SafeAreaView  style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <Searchbar
                placeholder="Search"
                value={""}
                elevation = {3}
                style={{
                    width:'80%',
                    shadowOpacity:10,
                    shadowRadius:10,

                }}
            />
            <Tab.Navigator  screenOptions={({route}) => ({
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
                }} component={MyParkingMain}/>
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
