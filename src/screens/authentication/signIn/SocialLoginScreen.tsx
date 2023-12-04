import {StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Text} from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Fragment} from "react";
import LoginTemplate from "../../../template/authentication/LoginTemplate";


export default function SocialLoginScreen({navigation}) {
    const header: React.FC = () => (
        <Fragment>
            {/*Space Logo Here*/}
            <Image source={require('assets/parkingSignIn.png')} style={{width: 250, height: 250}}/>
            <Text variant="headlineSmall"
                  style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Space에서{'\n'}편안한 주차하세요!</Text>
        </Fragment>
    )

    const context: React.FC = () => (
        <Fragment>
            {/* Social Logins */}
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <Image source={require('assets/socialLogin/google_circle.png')}
                       style={{width: 50, height: 50, marginRight: 10}}/>
                <Image source={require('assets/socialLogin/naver_circle.png')} style={{width: 50, height: 50}}/>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('SignInScreen')
            }} style={styles.mainSocialLoginButton}>
                <MaterialCommunityIcons name="email-outline" color="white" size={24}/>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}> 이메일로 로그인</Text>
            </TouchableOpacity>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignUpNav')
                }}>
                    <Text style={{color: 'white'}}>회원가입</Text>
                </TouchableOpacity>
                <Text style={{color: 'white'}}> | </Text>
                <TouchableOpacity onPress={() => {
                }}>
                    <Text style={{color: 'white'}}>문의하기</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    )

    return (
        <LoginTemplate header={header} context={context}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#28282B',
        color: 'white'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 300
    },
    loginContainer: {
        marginBottom: 50
    },
    mainSocialLoginButton: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#333333',
        borderRadius: 10,
        height: 45,
        marginTop: 12,
        width: 300
    }
})
