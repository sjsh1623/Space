import AuthenticationTemplate from "../AuthenticationTemplate";
import {TextInput} from 'react-native-paper';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {useEffect, useRef} from "react";

export default function SignInScreen() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const context: React.FC = () => (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <View>
                <Text style={{color: 'white', marginLeft:15, zIndex: 10, marginBottom:-7}}>이메일</Text>
                <TextInput
                    ref={emailRef}
                    textColor={'white'}
                    mode={"flat"}
                    style={{marginTop:-3}}
                    contentStyle={{backgroundColor: '#28282B'}}
                    cursorColor={'white'}
                    underlineColor={'white'}
                    placeholderTextColor={'#A8AAAA'}
                    activeUnderlineColor={'white'}
                    underlineStyle={{borderColor: 'white'}}
                    placeholder={'abc@space-parking.com'}
                />
            </View>
            <View style={{marginTop:50}}>
                <Text style={{color: 'white', marginLeft:15, zIndex: 10, marginBottom:-7}}>비밀번호</Text>
                <TextInput
                    ref={passwordRef}
                    textColor={'white'}
                    contentStyle={{backgroundColor: '#28282B'}}
                    cursorColor={'white'}
                    underlineColor={'white'}
                    placeholderTextColor={'#A8AAAA'}
                    activeUnderlineColor={'white'}
                    underlineStyle={{borderColor: 'white'}}
                    placeholder={'영문, 숫자, 특수문자'}
                />
            </View>
        </View>
    )
    return (
        <AuthenticationTemplate title={'이메일로 로그인'} context={context}/>
    )
}
