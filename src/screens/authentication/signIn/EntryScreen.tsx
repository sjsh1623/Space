import {StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Text} from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons';


export default function EntryScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                {/*Space Logo Here*/}
                <Ionicons name="ios-planet-outline" size={100} color="white"/>
                <Text variant="headlineLarge" style={{color: 'white', fontWeight: 'bold'}}>SPACE</Text>
            </View>
            {/*Login Buttons*/}
            <View style={styles.loginContainer}>
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
            </View>
        </SafeAreaView>
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
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 45,
        marginTop: 12
    }
})
