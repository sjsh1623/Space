import AuthenticationTemplate from "../../../template/authentication/AuthenticationTemplate";
import {TextInput, Button, HelperText, MD3Colors} from 'react-native-paper';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {useEffect, useRef, useState} from "react";
import {AuthenticationInput} from "../../../element/Inputs";
import {validatePassword, MessageState} from "util/Validation"

export default function SetPasswordScreen({navigation, route}) {
    const {email} = route.params;
    const defMessage = '영문 대소문자, 숫자, 특수문자 포함 8자리 이상 입력해주세요';
    const [password, setPassword] = useState<string>('');
    const [passwordValidate, setPasswordValidate] = useState<string>('');
    const [passwordError, setPasswordError] = useState<MessageState>({message: defMessage, isError: false});
    const [passwordValidateError, setPasswordValidateError] = useState<MessageState>({message: '', isError: false});

    const isPasswordMatch = () => {
        const isMatch = password === passwordValidate && !!password && !!passwordValidate;
        if (!isMatch) setPasswordValidateError({message: '비밀번호를 다시 한번 확인해주세요', isError: true})
    }

    const resetPasswordError = () => {
        setPasswordError({
            message: defMessage,
            isError: false
        })
    }

    const resetPasswordValidateError = () => {
        setPasswordValidateError({
            message: '',
            isError: false
        })
    }

    const createEmailAccount = () => {
        //To-Do : Save ID and Password to server
    };

    const moveNext = () => {
        navigation.navigate('SetPassword')
    }

    const context: React.ReactNode = (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput title={'비밀번호 입력'} placeholder={'비밀번호 입력'}
                                 onChangeText={setPassword}
                                 onBlur={() => {
                                     setPasswordError(validatePassword(password, defMessage))
                                 }}
                                 onFocus={resetPasswordError}
                                 secureTextEntry={true}/>

            <HelperText type="info" visible={true} style={{color: passwordError.isError ? '#D30000' : '#A8AAAA'}}
                        padding={'none'}>
                {passwordError.message}
            </HelperText>

            <AuthenticationInput title={'비밀번호 확인'} placeholder={'비밀번호 확인'} style={{marginTop: 40}}
                                 secureTextEntry={true}
                                 onChangeText={setPasswordValidate}
                                 onFocus={resetPasswordValidateError}
                                 onBlur={isPasswordMatch}/>

            <HelperText type="error" visible={passwordValidateError.isError} padding={'none'}>
                {passwordValidateError.message}
            </HelperText>

            <View style={{marginTop: 25}}>
                <Button mode="contained" style={{borderRadius: 5, backgroundColor: '#1167b1'}} onPress={() => {
                    isPasswordMatch()
                    if (!(passwordError.isError || passwordValidateError.isError)) {
                        createEmailAccount();
                        moveNext();
                    }
                }}>
                    확인
                </Button>
            </View>
        </View>
    )
    return (
        <AuthenticationTemplate title={'비밀번호 등록'} context={context}/>
    )
}
