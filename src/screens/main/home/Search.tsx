import {SafeAreaView, View, Text, TextInput, StyleSheet} from "react-native";
import {Appbar, Chip, Surface} from 'react-native-paper';

const Search = ({navigation}) => {
    const backButton = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
            <Appbar.Header mode={"small"} statusBarHeight={0} style={{backgroundColor: 'white'}}>
                <Appbar.BackAction onPress = {backButton}/>
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
                    <View style={{marginLeft: 10}}>
                        <View style={styles.rowContainer}>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10,}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                        </View>
                        <View style={styles.rowContainer}>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                            <Chip style={{backgroundColor: '#f6f6f6', marginLeft: 10}}
                                  onPress={() => console.log('Pressed')}>Chip</Chip>
                        </View>

                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    },
    rowContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    item: {
        width: 130, // Adjust the width as needed
        height: 130, // Adjust the height as needed
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic"
    },
});

export default Search;
