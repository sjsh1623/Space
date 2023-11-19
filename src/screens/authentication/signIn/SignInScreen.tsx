import AuthenticationTemplate from "../../../template/AuthenticationTemplate";
import {TextInput, Button} from 'react-native-paper';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {useEffect, useRef} from "react";
import {AuthenticationInput} from "element/Inputs";

export default function SignInScreen() {

    const context: React.FC = () => (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput title={'이메일 주소'} placeholder={'abc@space-parking.com'}/>
            <AuthenticationInput title={'비밀번호'} placeholder={'영문, 숫자, 특수문자'} style={{
                marginTop: 45
            }}/>
            <View style={{marginTop: 25}}>
                <Button mode="contained" style={{borderRadius: 5, backgroundColor: '#1167b1'}}>
                    로그인
                </Button>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
            }}>

                <Text style={{
                    color: '#A8AAAA',
                    textDecorationLine: 'underline',
                    fontSize: 13,
                }}>비밀번호를 잊으셨나요?</Text>
            </View>
        </View>
    )
    return (
        <AuthenticationTemplate title={'이메일로 로그인'} context={context}/>
    )
}
