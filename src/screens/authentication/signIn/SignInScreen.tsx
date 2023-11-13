import AuthenticationTemplate from "../AuthenticationTemplate";
import {TextInput} from 'react-native-paper';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {useRef} from "react";

export default function SignInScreen() {

    const context: React.FC = () => (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <TextInput
                label={'이메일 주소'}
                textColor={'white'}
                contentStyle={{backgroundColor: '#28282B', height: 60, paddingTop: 30}}
                cursorColor={'white'}
                underlineColor={'white'}
                placeholderTextColor={'#A8AAAA'}
                placeholder={'abc@space-parking.com'}
                activeUnderlineColor={'white'}
                underlineStyle={{borderColor: 'white'}}
                autoFocus={true}
                theme={{
                    colors: {
                        background: '#28282B',
                        onSurfaceVariant: 'white',
                    },
                }}

            />
            <TextInput
                label={'비밀번호'}
                textColor={'white'}
                contentStyle={{backgroundColor: '#28282B', height: 60, paddingTop: 30}}
                cursorColor={'white'}
                underlineColor={'white'}
                placeholderTextColor={'#A8AAAA'}
                activeUnderlineColor={'white'}
                underlineStyle={{borderColor: 'white'}}
                autoFocus={true}
                theme={{
                    colors: {
                        background: '#28282B',
                        onSurfaceVariant: 'white',
                    },
                }}
                placeholder={'영문, 숫자, 특수문자'}
            />
        </View>
    )
    return (
        <AuthenticationTemplate title={'이메일로 로그인'} context={context}/>
    )
}
