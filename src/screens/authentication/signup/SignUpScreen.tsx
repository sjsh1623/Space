import AuthenticationTemplate from "template/Authentication/AuthenticationTemplate";
import {Button, TextInput} from 'react-native-paper';
import {Text, View} from "react-native";
import {useState} from "react";

export default function SignUpScreen() {
    const [email, setEmail] = useState<string>('');

    const context: React.FC = () => (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <View>
                <Text style={{color: 'white', zIndex: 10, fontSize: 12}}>{'이메일'}</Text>
                <TextInput
                    textColor={'white'}
                    value={email}
                    mode={"flat"}
                    style={{height: 40}}
                    contentStyle={{backgroundColor: '#28282B', marginLeft: -15}}
                    cursorColor={'white'}
                    underlineColor={'white'}
                    placeholderTextColor={'#A8AAAA'}
                    activeUnderlineColor={'white'}
                    underlineStyle={{borderColor: 'white'}}
                    placeholder={'abc@space-parking.com'}
                    onChangeText={(val) => {
                        setEmail(val)
                    }}/>
            </View>
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
