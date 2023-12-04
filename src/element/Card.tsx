import {Card, Avatar} from "react-native-paper"
export const CardWithProfile = () => {
    return (
        <Card.Title
            title="사랑의 교회"
            subtitle="서울시 서초구 반포대로 121"
            left={(props) => <Avatar.Image size={50} source={require('assets/sample/사랑의교회.jpg')} />}
        />
    )
}
