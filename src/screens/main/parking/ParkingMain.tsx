import {View, SafeAreaView} from "react-native";
import {Text} from "react-native-paper"
import {CardWithProfile} from "../../../element/Card";

export const ParkingMain = () => {
    return (
        <SafeAreaView>
            <Text variant="titleLarge">북마크</Text>
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
        </SafeAreaView>
    )
}

export default ParkingMain;
