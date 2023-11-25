import AuthenticationTemplate from "../../../template/Authentication/AuthenticationTemplate";
import {Button} from 'react-native-paper';
import {Text, View} from "react-native";
import {AuthenticationInput} from "element/Inputs";
import {useState} from "react";
import {validateEmail, validatePassword} from "util/Validation"

export default function SignInScreen() {
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('')
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const checkEmail = (input) => {
    }

    const checkPassword = () => {
    }

    const context: React.FC = () => (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput
                title={'이메일 주소'}
                placeholder={'abc@space-parking.com'}
                onChangeText={(email) => {
                    setEmail(email)
                }}/>

            <AuthenticationInput
                title={'비밀번호'}
                placeholder={'영문, 숫자, 특수문자'}
                style={{marginTop: 45}}
                onChangeText={(password) => setPassword(password)}/>

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
