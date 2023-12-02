import AuthenticationTemplate from "template/Authentication/AuthenticationTemplate";
import {TextInput, Button, Snackbar} from 'react-native-paper';
import {Text, View, TouchableOpacity} from "react-native";
import {useEffect, useRef, useState} from "react";
import {AuthenticationInput} from "element/Inputs";
import Ticker from 'util/Ticker';

interface emailVerification {
    email: String
}

export default function EmailVerificationScreen({navigation, props}) {
    const [error, setError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [isTickerExist, setTickerExist] = useState<boolean>(false);
    const emailTicker = useRef<Ticker | null>(null);
    const [ticker, setTicker] = useState<string>('');
    const [visible, setVisible] = useState(false);

    const onToggleSnackBar = () => setVisible(true);
    const onDismissSnackBar = () => setVisible(false);


    useEffect(() => {
        emailTicker.current = new Ticker((time) => {
            setTicker(time);
        }, 30);

        emailTicker.current.start();
        setTickerExist(true);

        return () => {
            if (emailTicker.current) {
                emailTicker.current.stop();
            }
        };
    }, []);


    const sendVerificationEmail = () => {
        // To-Do : Send an Email using an API
        emailTicker.current.reset();
    }

    const context: React.ReactNode = (
        <View style={{width: '100%', backgroundColor: '#28282B'}}>
            <View style={{
                marginTop: -35,
                marginBottom: 20
            }}>
                <Text style={{
                    color: '#2edaff',
                    fontSize: 17,
                    fontWeight: 'bold',
                }}>코드 6자리 입력</Text>
            </View>
            <Text style={{
                color: 'white',
                fontSize: 14,
                marginBottom: 40
            }}>계정 확인을 위해 위 메일로 보내드린 인증 코드를 입력해 주세요.</Text>
            <AuthenticationInput title={'인증 코드'} placeholder={'코드 6자리 입력'}
                                 right={<TextInput.Affix textStyle={{color: '#2edaff'}} text={ticker}/>}
                                 autoFocus={true}
                                 onChangeText={() => {
                                 }
                                 }/>

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
                    <Text style={{textDecorationLine: 'underline', color: 'white', marginTop: 15}} onPress={() => {
                        sendVerificationEmail()
                        onToggleSnackBar()
                    }}>인증 코드 재전송</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    const toastContext: React.ReactNode = (
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            duration={800}
            >
            이메일을 다시 전송했어요.
        </Snackbar>
    )

    return (
        <AuthenticationTemplate title={'이메일 계정 인증'} context={context} toastContext={toastContext}/>
    )
}
