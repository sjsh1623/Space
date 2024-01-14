import {SafeAreaView, ScrollView, View, StyleSheet} from "react-native";
import {Appbar} from 'react-native-paper';
import DoubleHorizontalScroll from "component/main/home/DoubleHorizontalScroll";
import SingleHorizontalScroll from "component/main/home/SingleHorizontalScroll";

export const index = ({navigation}) => {

    /* 아래의 헤더 추후 분리 필요 (State 관리 될 수 있도록 */
    const Header = () => {
        const _handleSearch = () => {
            navigation.navigate('Search');
        };
        const _handleMore = () => console.log('Shown more');
        return (
            <Appbar.Header mode={"small"} statusBarHeight={0} style={{backgroundColor: 'white'}}>
                <Appbar.Content title="스페이스" titleStyle={{
                    fontSize: 18,
                    fontWeight: 800,
                    paddingLeft: 10,
                }}/>
                <Appbar.Action icon="magnify" onPress={_handleSearch}/>
                <Appbar.Action icon="dots-vertical" onPress={_handleMore}/>
            </Appbar.Header>
        )
    }

    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }}>
            <Header/>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <DoubleHorizontalScroll/>
                <SingleHorizontalScroll/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index;
