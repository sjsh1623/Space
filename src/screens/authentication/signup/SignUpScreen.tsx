import AuthenticationTemplate from "template/AuthenticationTemplate";
import {Button} from 'react-native-paper';
import {View} from "react-native";
import {AuthenticationInput} from "element/Inputs";

export default function SignUpScreen() {

    const context: React.FC = () => (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <AuthenticationInput title={'이메일'} placeholder={'abc@space-parking.com'}/>
            <View style={{marginTop: 25}}>
                <Button mode="contained" style={{borderRadius: 5, backgroundColor: '#1167b1'}}>
                    이메일 인증 요청
                </Button>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
            }}>
            </View>
        </View>
    )
    return (
        <AuthenticationTemplate title={'이메일로 로그인'} context={context}/>
    )
}
