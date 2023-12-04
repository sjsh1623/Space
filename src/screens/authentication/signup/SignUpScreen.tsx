import AuthenticationTemplate from "template/authentication/AuthenticationTemplate";
import {Button, HelperText, TextInput} from 'react-native-paper';
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
            navigation.navigate('EmailVerification', {email: email})
        }
    }

    const context: React.ReactNode = (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput
                title={'이메일'}
                placeholder={'abc@space-parking.com'}
                onChangeText={setEmail}/>

            <HelperText type="error" visible={emailError.isError} padding={"none"}>
                {emailError.message}
            </HelperText>

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
