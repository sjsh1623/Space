import {SafeAreaView, View, Text, TextInput} from "react-native";
import {Appbar, Chip} from 'react-native-paper';

const Search = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
            <Appbar.Header mode={"small"} statusBarHeight={0} style={{backgroundColor: 'white'}}>
                <Appbar.BackAction onPress={() => {
                }}/>
                <View>
                    <TextInput
                        style={{fontSize: 17}}
                        onChangeText={() => {
                        }}
                        placeholder="오늘은 어디를 가볼까요?"
                        autoFocus={true}
                    />
                </View>
            </Appbar.Header>

            <View>
                <View style={{position: 'absolute'}}>
                    <Chip style={{backgroundColor: '#f6f6f6'}} onPress={() => console.log('Pressed')}>Example Chip</Chip>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Search;
