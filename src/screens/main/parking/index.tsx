import {View, SafeAreaView, ScrollView} from "react-native";
import {Appbar, Text} from "react-native-paper"
import MyParkingSpace from "component/main/parking/MyParkingSpace";
import SingleHorizontalScroll from "../../../component/main/home/SingleHorizontalScroll";

export const Index = () => {

    /* 아래의 헤더 추후 분리 필요 (State 관리 될 수 있도록 */
    const Header = () => {
        const _handleSearch = () => {
            console.log('search')
        };
        const _handleMore = () => console.log('Shown more');
        return (
            <Appbar.Header mode={"small"} statusBarHeight={0} style={{backgroundColor: 'white'}}>
                <Appbar.Content title="주차" titleStyle={{
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
            backgroundColor: 'white',
        }}>
            <Header/>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 25}}>
                    <Text style={{fontSize: 20, fontWeight: 700}}>내 주차장</Text>
                    <MyParkingSpace/>
                </View>
                <View>
                    <SingleHorizontalScroll/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Index;
