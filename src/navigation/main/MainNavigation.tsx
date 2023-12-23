import * as React from 'react';
import {BottomNavigation, DefaultTheme, Text, useTheme} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import SpaceMap from "../../screens/main/spaceMap/SpaceMap";
import ManagerHome from "../../screens/main/manager/ManagerHome";
import MyParkingNavigation from "./myParking/MyParkingNavigation";
import MyParkingMain from "../../screens/main/myParking/MyParkingMain";
import PrivateMain from "../../screens/main/myParking/PrivateMain";

const MainNavigation = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'bookmark',
            title: '북마크',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="greenhouse" size={size} color={color}/>
        },
        {
            key: 'map',
            title: '주차',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="parking" size={size} color={color}/>,
        },
        {
            key: 'private',
            title: '프라이빗',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="account-supervisor-outline" size={size} color={color}/>
        },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        bookmark: MyParkingMain,
        myParking: MyParkingNavigation,
        private: PrivateMain,
    });

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            sceneAnimationType={'shifting'}
            sceneAnimationEnabled={true}
            safeAreaInsets={{bottom: 15}}
            barStyle={{backgroundColor: 'white'}}
        />
    );
};

export default MainNavigation;
