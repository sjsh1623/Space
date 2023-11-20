import {StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Text} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';
import {Fragment} from "react";
import LoginTemplate from "../../../template/Authentication/LoginTemplate";


export default function EntryScreen({navigation}) {
    const header: React.FC = () => (
        <Fragment>
            <Ionicons name="ios-planet-outline" size={100} color="white"/>
            <Text variant="headlineLarge" style={{color: 'white', fontWeight: 'bold'}}>SPACE</Text>
        </Fragment>
    )

    const context: React.FC = () => (
        <Fragment>
            <TouchableOpacity onPress={() => {
                alert("Preparing...")
            }}>
                <Image source={require('assets/socialLogin/kakao_wide.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate('SignInNav')
            }} style={styles.mainSocialLoginButton}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>다른 계정으로 로그인</Text>
            </TouchableOpacity>
        </Fragment>
    )

    return (
        <LoginTemplate header={header} context={context}/>
    )
}

const styles = StyleSheet.create({
    mainSocialLoginButton: {
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 45,
        marginTop: 12
    }
})
