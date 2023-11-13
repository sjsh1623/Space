import {ReactNode} from "react";
import {StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Text} from 'react-native-paper';

interface AuthTempProps {
    title: string,
    context: React.FC
}

export default function AuthenticationTemplate(AuthTempProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text variant="headlineMedium" style={styles.title}>{AuthTempProps.title}</Text>
            </View>
            <View style={styles.contextContainer}>
               <AuthTempProps.context/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#28282B',
    },
    titleContainer: {
        marginLeft: 30,
        marginTop: 60
    },
    title: {
        color: 'white',
    },
    contextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding:30
    }
})
