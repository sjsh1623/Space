import {StyleSheet, View, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Text} from 'react-native-paper';
import {Ionicons} from "@expo/vector-icons";

interface LoginTemplateProps {
    header: React.FC,
    context: React.FC
}

export default function LoginTemplate(LoginTemplateProps: LoginTemplateProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <LoginTemplateProps.header/>
            </View>

            <View style={styles.context}>
                <LoginTemplateProps.context/>
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
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 300
    },
    context: {
        marginBottom: 50
    }
})
