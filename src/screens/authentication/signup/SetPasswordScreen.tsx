import AuthenticationTemplate from "../../../template/Authentication/AuthenticationTemplate";
import {TextInput, Button} from 'react-native-paper';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {useEffect, useRef, useState} from "react";
import {AuthenticationInput} from "../../../element/Inputs";
import {validateEmail, validatePassword, MessageState} from "util/Validation"

export default function SetPasswordScreen() {
    const [password, setPassword] = useState<string>('');
    const [passwordValidate, setPasswordValidate] = useState<string>('');
    const [passwordError, setPasswordError] = useState<MessageState>({message: '', isError: false});
    const [passwordValidateError, setPasswordValidateError] = useState<MessageState>({message: '', isError: false});

    const context: React.ReactNode = (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput title={'비밀번호 입력'} placeholder={'비밀번호 입력'} onChangeText={setPassword}/>
            <Text style={{color: '#A8AAAA', fontSize: 12, marginTop: 5}}>영문 대소문자, 숫자, 특수문자 포함 8자리 이상 입력해주세요</Text>
            <AuthenticationInput title={'비밀번호 확인'} placeholder={'비밀번호 확인'} style={{marginTop: 40}}
                                 onChangeText={setPasswordValidate}/>
            <View style={{marginTop: 25}}>
                <Button mode="contained" style={{borderRadius: 5, backgroundColor: '#1167b1'}}>s
                    확인
                </Button>
            </View>
        </View>
    )
    return (
        <AuthenticationTemplate title={'비밀번호 등록'} context={context}/>
    )
}
