import {ScrollView, SafeAreaView} from "react-native";
import {Text} from "react-native-paper"
import {CardWithProfile} from "../../../element/Card";

export const PrivateMain = () => {
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <ScrollView style={{marginTop: 20}}>
                <Text variant="titleLarge" style={{marginLeft: 20, marginBottom: 10}}>프라이빗</Text>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
                <CardWithProfile/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrivateMain;
