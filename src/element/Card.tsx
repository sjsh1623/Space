import * as React from "react";
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

export const CardWithProfile = () => {
    const handleOptionsPress = (itemId) => {
        // Implement your logic for handling the options press
        console.log('Options pressed for item id:', itemId);
    };

   return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            paddingLeft: 10,
            marginLeft: -20
        }}>
            <Image source={require('assets/sample/사랑의교회.jpg')}
                   style={{width: 80, height: 80, borderRadius: 45, marginRight: 10}}/>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>강남구 주차장</Text>
                <Text style={{fontSize: 14, paddingTop: 3}}>서울특별시 강남구 학동로 426</Text>
                <Text style={{fontSize: 14, paddingTop: 3}}>입차중</Text>
                {/* Add two more lines of text here if needed */}
            </View>
            <TouchableOpacity onPress={() => handleOptionsPress(item.id)}>
                <View style={{padding: 10}}>
                    {/* Replace the following icon with your three vertical dots icon */}
                    <Text>...</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default CardWithProfile;
