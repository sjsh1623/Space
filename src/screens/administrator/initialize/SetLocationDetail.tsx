import {useState} from "react";
import {Address} from "interface/Location";
import {View, StyleSheet, Text, TouchableOpacity, Platform} from "react-native";
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default function SetLocationDetail({route}) {
    const addressList: Array<Address> = route.params.addressList;
    const [pageNum, setPageNum] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState<boolean>(false);
    const [clickedButtons, setClickedButtons] = useState<boolean[]>(Array(process.env.EXPO_PUBLIC_SUPPORT_MAX_FLOOR).fill(false));
    const pageInfo: Address = addressList[pageNum];
    const handleNameFocus = () => {
        setIsNameFocused(true);
        setIsDescriptionFocused(false);
    };

    const handleButtonClick = (index: number) => {
        console.log(index)
    };

    const handleDescriptionFocus = () => {
        setIsDescriptionFocused(true);
        setIsNameFocused(false);
    };

    const squareButtons = Array.from({length: process.env.EXPO_PUBLIC_SUPPORT_MAX_FLOOR}, (_, index) => (
        <TouchableOpacity
            key={index}
            style={[
                styles.squareButton,
                clickedButtons[index] ? styles.clickedButton : null,
            ]}
            onPress={() => handleButtonClick(index)}
        >
            <Text style={styles.buttonText}>B{index + 1}</Text>
        </TouchableOpacity>
    ));

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', 'transparent']}
                start={{x: 0, y: 0.85}}
                end={{x: 0, y: 1}}
                style={styles.gradient}
            />
            <View>
                <LinearGradient
                    colors={['black', 'white']}
                    start={{x: 0.2, y: 0.75}}
                    end={{x: 0.5, y: 1}}
                    style={[
                        styles.linearGradient,
                        {marginTop: 15, width: 100, borderRadius: 50}, // <-- Overwrites the preceding style property
                    ]}>
                    <View style={[styles.innerContainer, {borderRadius: 75}]}>
                        <Text style={{color: 'white', fontSize: 55, fontWeight: 'bold'}}>P</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{marginTop: 20, marginLeft: 5}}>
                <Text style={styles.title}>{pageInfo.title}</Text>
                <Text style={styles.description}>{pageInfo.address}</Text>
                <View style={styles.horizontalLine}></View>
            </View>
            <View style={{
                marginTop: 60
            }}>
                <TextInput
                    mode={'outlined'}
                    label="주차장 이름"
                    activeOutlineColor={'black'}
                    value={''}
                />

                <TextInput
                    mode={'outlined'}
                    label="설명"
                    activeOutlineColor={'black'}
                    multiline={true}
                    numberOfLines={10}
                    maxLength={20}
                    value={''}
                    style={{
                        minHeight: (Platform.OS === 'ios') ? 200 : null
                    }}
                />
                <View>
                    <View style={styles.iconContainer}>
                        <Text style={styles.icon}>Icon</Text>
                        <Text style={styles.title}>Title</Text>
                    </View>

                    <View style={styles.squareButtonsContainer}>
                        {squareButtons}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    horizontalLine: {
        borderBottomWidth: 1, // Adjust the width as needed
        borderBottomColor: 'white', // Change the color as needed
        marginBottom: 30
    },
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 60,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    description: {
        color: 'white',
        fontSize: 14,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        fontSize: 16,
        paddingVertical: 8,
        marginBottom: 20,
    },
    descriptionInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 16,
        padding: 10,
        marginBottom: 20,
        height: 100, // Adjust the height as needed
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        fontSize: 8,
        marginRight: 10,
    },
    squareButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    squareButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        padding: 1,
        margin: 2,
        borderRadius: 5,
        height: 30,
        width: 40, // Adjust the width as needed
    },
    clickedButton: {
        backgroundColor: 'black', // Change the background color to black when clicked
    },
    buttonText: {
        fontSize: 13
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '40%',
    },
    linearGradient: {
        height: 100,
        width: 100,
        borderRadius: 15, // <-- Outer Border Radius
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15, // <-- Inner Border Radius
        flex: 1,
        margin: 5, // <-- Border Width
        backgroundColor: 'black',
    },
});
