import AuthenticationTemplate from "../../../template/authentication/AuthenticationTemplate";
import {Button, HelperText} from 'react-native-paper';
import {Text, View} from "react-native";
import {AuthenticationInput} from "element/Inputs";
import {useState} from "react";
import {validateEmail, validatePassword, MessageState} from "util/Validation"

export default function SignInScreen() {
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('')
    const [emailError, setEmailError] = useState<MessageState>({message: '', isError: false});
    const [passwordError, setPasswordError] = useState<MessageState>({message: '', isError: false});

    const validate = (value, type: 'email' | 'password') => {
        if (type === 'email') {
            setEmailError(validateEmail(value));
        } else {
            setPasswordError(validatePassword(value));
        }
    }

    const context: React.ReactNode = (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput
                title={'이메일 주소'}
                placeholder={'abc@space-parking.com'}
                onBlur={(event) => {
                    validate(event.nativeEvent.text, 'email')
                }}
                error={emailError.isError}
                onChangeText={(email) => {
                    setEmail(email)
                }}/>

            <AuthenticationInput
                title={'비밀번호'}
                placeholder={'영문, 숫자, 특수문자'}
                style={{marginTop: 45}}
                onBlur={(event) => {
                    validate(event.nativeEvent.text, 'password')
                }}
                error={passwordError.isError}
                onChangeText={(password) => setPassword(password)}/>

            <HelperText type="error" visible={emailError.isError || passwordError.isError} padding={"none"}>
                {emailError.message || passwordError.message}
            </HelperText>

            <View style={{marginTop: 10}}>
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
