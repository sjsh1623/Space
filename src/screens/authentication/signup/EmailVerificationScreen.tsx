import AuthenticationTemplate from "../../../template/AuthenticationTemplate";
import {TextInput, Button} from 'react-native-paper';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {useEffect, useRef} from "react";
import {AuthenticationInput} from "../../../element/Inputs";

interface emailVerification {
    email: String
}

export default function EmailVerificationScreen(emailVerification) {
    const context: React.FC = () => (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <View style={{
                marginTop: -35,
                marginBottom: 20
            }}>
                <Text style={{
                    color: '#2edaff',
                    fontSize: 17,
                    fontWeight: 'bold',
                }}>abc@space-parking.com</Text>
            </View>
            <Text style={{
                color: 'white',
                fontSize: 14,
                marginBottom: 40
            }}>계정 확인을 위해 위 메일로 보내드린 인증 코드를 입력해 주세요.</Text>
            <AuthenticationInput title={'인증 코드'} placeholder={'코드 6자리 입력'}
                                 right={<TextInput.Affix textStyle={{color: '#2edaff'}} text="29:59"/>}
                                 autoFocus={true}/>
            <View style={{marginTop: 25}}>
                <Button mode="contained" style={{borderRadius: 5, backgroundColor: '#1167b1'}}>
                    이메일 인증 완료
                </Button>
            </View>
            <View style={{
                paddingTop: 20
            }}>
                <Text style={{color: '#A8AAAA', fontSize: 13,}}>메일을 받지 못했다면 인증 코드 재전송 요청하거나 스팸 메일함을 확인해 보세요</Text>
                <TouchableOpacity onPress={() => {
                }}>
                    <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 15}}>인증 코드 재전송</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    return (
        <AuthenticationTemplate title={'이메일 계정 인증'} context={context}/>
    )
}
