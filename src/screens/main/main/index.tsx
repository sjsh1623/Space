import {View, Text, SafeAreaView} from "react-native";
import {Appbar} from 'react-native-paper';

export const index = () => {

    /* 아래의 헤더 추후 분리 필요 (State 관리 될 수 있도록 */
    const header = () => {
        const _handleSearch = () => console.log('Searching');
        const _handleMore = () => console.log('Shown more');
        return (
            <Appbar.Header mode={"small"} statusBarHeight={0}>
                <Appbar.Content title="스페이스" titleStyle={{fontSize: 16,
                    paddingLeft: 10,
                    fontWeight: 500}}/>
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
            {header()}


        </SafeAreaView>
    )
}

export default index;
