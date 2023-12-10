import {Card, Avatar} from "react-native-paper"
import * as React from "react";
import {ReactNode} from "react";
import {View, Text} from "react-native";

export const CardWithProfile = () => {
    const context: React.ReactNode = (
        <View>
            <Text style={{color: '#A8AAAA'}}>여기는 주소가 들어갈 예정</Text>
            <Text style={{color: '#A8AAAA'}}>여기는 화 수 금 또는 일</Text>
        </View>
    );
    return (
        <Card.Title
            title="사랑의 교회"
            subtitle={context}
            left={(props) => <Avatar.Image size={props.size + 10} source={require('assets/sample/사랑의교회.jpg')}/>}
            leftStyle={{marginRight:30, marginTop: 15}}
            style={{marginBottom:10}}
        />
    )
}
