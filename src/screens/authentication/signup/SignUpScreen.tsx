import AuthenticationTemplate from "template/Authentication/AuthenticationTemplate";
import {Button, TextInput} from 'react-native-paper';
import {Text, View} from "react-native";
import {useState} from "react";
import {AuthenticationInput} from "../../../element/Inputs";
import {MessageState, validateEmail} from "../../../util/Validation";

export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<MessageState>({message: '', isError: false});

    const validateNNavigate = () => {
        const emailErrorInfo: MessageState = validateEmail(email)
        setEmailError(emailErrorInfo);
        if(!emailErrorInfo.isError) {
            setEmailError(emailErrorInfo);
            navigation.navigate('EmailVerification', email)
        }
    }

    const context: React.ReactNode = (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput
                title={'이메일'}
                placeholder={'abc@space-parking.com'}
                onChangeText={(email) => {
                    setEmail(email)
                }}/>

            <Text style={{color: 'red', marginTop: 5, fontSize: 13}}>
                {emailError.message}
            </Text>

            <View style={{marginTop: 10}}>
                <Button mode="contained" style={{borderRadius: 5, backgroundColor: '#1167b1'}} onPress={() => {
                    validateNNavigate();
                }}>
                    이메일 인증 요청
                </Button>
            </View>
        </View>
    )
    return (
        <AuthenticationTemplate title={'이메일로 회원가입'} context={context}/>
    )
}
