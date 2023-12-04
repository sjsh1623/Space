import {StyleSheet, View, SafeAreaView} from "react-native";
import {Snackbar, Text} from 'react-native-paper';

export interface AuthTempProps {
    title: string;
    context: React.ReactNode; // Assuming context is a JSX element
    toastContext?: React.ReactNode;
}

const AuthenticationTemplate: React.FC<AuthTempProps> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text variant="headlineSmall" style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.contextContainer}>
                {props.context}
            </View>
            <View style={styles.toastContainer}>
                {props.toastContext}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#28282B',
    },
    titleContainer: {
        marginLeft: 30,
        marginTop: 60,
        marginBottom: 20
    },
    title: {
        color: 'white',
    },
    contextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    toastContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
})

export default AuthenticationTemplate;
