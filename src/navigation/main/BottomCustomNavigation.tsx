import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Parking from "screens/main/parking";
import HomeNav from "navigation/main/home/HomeNavigation";
import Setting from "screens/main/setting";

const BottomCustomNavigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'HomeNav',
            title: '홈',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="greenhouse" size={size} color={color}/>
        },
        {
            key: 'Parking',
            title: '주차',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="parking" size={size} color={color}/>,
        },
        {
            key: 'Setting',
            title: '설정',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="account-supervisor-outline" size={size} color={color}/>
        },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        HomeNav: HomeNav,
        Parking: Parking,
        Setting: Setting,
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

export default BottomCustomNavigation;
