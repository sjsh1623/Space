import {useState} from "react";
import {Address} from "interface/Location";
import {TextInput, View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import parkingDescription  from "assets/parkingDescription.jpeg"
import parkingDesc1 from "assets/parkingDesc1.jpeg"

export default function SetLocationDetail({route}) {
    const addressList: Array<Address> = route.params.addressList;
    console.log(addressList)
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

    const squareButtons = Array.from({ length: process.env.EXPO_PUBLIC_SUPPORT_MAX_FLOOR }, (_, index) => (
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
            <View style={{paddingBottom: 30}}>
                <Image
                    source={parkingDesc1}
                    style={{borderRadius:20, width: 100, height: 100}}
                />
            </View>
            <Text style={styles.title}>{pageInfo.title}</Text>
            <Text style={styles.description}>{pageInfo.address}</Text>

            <Text style={styles.label}>주차장 이름</Text>
            <TextInput
                style={[
                    styles.input,
                    isNameFocused ? {borderBottomColor: 'red'} : null,
                ]}
                placeholder="주차장의 이름을 작성해주세요"
                value={name}
                onChangeText={(text) => setName(text)}
                onFocus={handleNameFocus}
            />

            <Text style={styles.label}>설명</Text>
            <TextInput
                style={[
                    styles.descriptionInput,
                    isDescriptionFocused ? {borderColor: 'red'} : null,
                ]}
                placeholder="주차장에 대해서 간략하게 설명해주세요."
                value={description}
                onChangeText={(text) =>
                    text.length <= 20 ? setDescription(text) : null
                }
                onFocus={handleDescriptionFocus}
                maxLength={20}
                multiline={true}
                numberOfLines={3}
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 75,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: 'gray',
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
    }
});
