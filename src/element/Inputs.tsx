import {
    StyleProp,
    Text,
    View,
    ViewStyle,
} from "react-native";
import {TextInput} from "react-native-paper";
import {NativeSyntheticEvent} from "react-native/Libraries/Types/CoreEventTypes";
import {TextInputFocusEventData} from "react-native/Libraries/Components/TextInput/TextInput";

interface AuthenticationField {
    title: string,
    placeholder: string,
    onChangeText: (text: string) => void,
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
    style?: StyleProp<ViewStyle>,
    right?: React.ReactNode
    autoFocus?: boolean
    error?: boolean,
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
                right={AuthenticationField.right}
                autoFocus={AuthenticationField.autoFocus}
                onChangeText={AuthenticationField.onChangeText}
                error={AuthenticationField.error}
                onFocus={AuthenticationField.onFocus}
                onBlur={AuthenticationField.onBlur}
            />
        </View>
    )
}
