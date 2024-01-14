import {View, StyleSheet, SafeAreaView, FlatList} from "react-native";
import {Surface, Button, Text} from "react-native-paper";
import {AntDesign} from '@expo/vector-icons';
import SingleHorizontalScroll from "../home/SingleHorizontalScroll";
import {CardWithProfile} from "element/Card";
import * as React from "react";

const MyParkingSpace = () => {
    const NoDataBlock = () => {
        return (
            <View>
                <View style={{marginTop: 30}}>
                    <View>
                        <Surface style={styles.cardContainer} elevation={1}>
                            <AntDesign name="bars" size={40} style={{marginBottom: 15}} color="black"/>
                            <Text variant="bodyLarge" style={{fontWeight: 700}}>등록 주차장이 아직 없어요</Text>
                            <Text variant="bodyMedium">QR 코드 촬영 또는 즐겨찾기를 통해 등록해주세요</Text>
                            <Button icon="camera" mode="contained-tonal" style={{marginTop: 20}}
                                    onPress={() => console.log('Pressed')}>
                                QR 촬영
                            </Button>
                        </Surface>
                    </View>
                </View>
            </View>
        )
    }

    const ParkingData = () => {
        const data = [
            {id: '1', image: 'image1.jpg', text: 'Item 1 Description'},
            {id: '2', image: 'image2.jpg', text: 'Item 2 Description'},
            {id: '3', image: 'image3.jpg', text: 'Item 3 Description'},
            // Add more items as needed
        ];

        return data.map(item => (
            <CardWithProfile/>
        ))
    }
    return (
        <View>
            {/* If there is none set */}
            <NoDataBlock/>
            {/* If Something is set */}
            <ParkingData/>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        height: 230,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MyParkingSpace;
