import {View, Text, SafeAreaView, ScrollView} from "react-native";
import {Appbar} from 'react-native-paper';
import DoubleHorizontalScroll from "../../../component/main/DoubleHorizontalScroll";
import SingleHorizontalScroll from "../../../component/main/SingleHorizontalScroll";

export const index = () => {

    /* 아래의 헤더 추후 분리 필요 (State 관리 될 수 있도록 */
    const Header = () => {
        const _handleSearch = () => console.log('Searching');
        const _handleMore = () => console.log('Shown more');
        return (
            <Appbar.Header mode={"small"} statusBarHeight={0}>
                <Appbar.Content title="스페이스" titleStyle={{
                    fontSize: 16,
                    fontWeight: 500,
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
