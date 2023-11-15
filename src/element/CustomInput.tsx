import {StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";
import {TextInput} from "react-native-paper";

interface AuthenticationField {
    title: string,
    placeholder: string,
    style?: StyleProp<ViewStyle>
}

export function AuthenticationInput(AuthenticationField: AuthenticationField) {
    return (
        <View style={AuthenticationField.style}>
            <Text style={{color: 'white', zIndex: 10, fontSize: 12}}>{AuthenticationField.title}</Text>
            <TextInput
                textColor={'white'}
                mode={"flat"}
                style={{height: 40}}
                contentStyle={{backgroundColor: '#28282B', marginLeft: -15}}
                cursorColor={'white'}
                underlineColor={'white'}
                placeholderTextColor={'#A8AAAA'}
                activeUnderlineColor={'white'}
                underlineStyle={{borderColor: 'white'}}
                placeholder={AuthenticationField.placeholder}
            />
        </View>
    )
}
