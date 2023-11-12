import AuthenticationTemplate from "../AuthenticationTemplate";
import {TextInput} from 'react-native-paper';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";

export default function SignInScreen() {
    const context: React.FC = () => (
        <View>
            <TextInput
                label={'이메일 주소'}
                textColor={'white'}
                contentStyle={{backgroundColor: '#28282B'}}
                cursorColor={'white'}
                underlineColor={'white'}
                placeholderTextColor={'grey'}
                placeholder={'abc@space-parking.com'}
            />
            <TextInput
                label={'비밀번호'}
                textColor={'white'}
                contentStyle={{backgroundColor: '#28282B'}}
                cursorColor={'white'}
                underlineColor={'white'}
                placeholderTextColor={'grey'}
                placeholder={'영문, 숫자, 특수문자'}
            />
        </View>
    )
    return (
        <AuthenticationTemplate title={'이메일로 로그인'} context={context}/>
    )
}
