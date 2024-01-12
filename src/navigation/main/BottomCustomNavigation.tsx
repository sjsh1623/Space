import * as React from 'react';
import {BottomNavigation, DefaultTheme, Text, useTheme} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Index from "../../screens/main/parking";
import Map from "../../screens/main/main";
import SettingMain from "../../screens/main/setting";

const BottomCustomNavigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'Parking',
            title: '주차장',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="greenhouse" size={size} color={color}/>
        },
        {
            key: 'Map',
            title: '지도',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="parking" size={size} color={color}/>,
        },
        {
            key: 'Setting',
            title: '설정',
            focusedIcon: ({size, color}) => <MaterialCommunityIcons name="account-supervisor-outline" size={size} color={color}/>
        },
    ]);

    const renderScene = BottomCustomNavigation.SceneMap({
        Parking: Index,
        Map: Map,
        Setting: SettingMain,
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
