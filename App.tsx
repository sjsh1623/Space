import {StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {useEffect, useState} from "react";
import Geolocation from "react-native-geolocation-service";

interface ILocation {
    latitude: number;
    longitude: number;
}

export default function App() {
    const [location, setLocation] = useState<ILocation | undefined>();
    const [markers, setMarkers] = useState([])
        useEffect(() => {
            Geolocation.requestAuthorization("whenInUse").then(() => {
                Geolocation.getCurrentPosition(
                    (position) => {
                        const {latitude, longitude} = position.coords;
                        setLocation({
                            latitude,
                            longitude,
                        });
                    },
                    error => {
                        console.log(error.code, error.message);
                    },
                    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
                );
            })
        }, []);


    if (!location) {
        return (
            <View>
                <Text>Splash Screen</Text>
            </View>
        );
    }

    return (
        <>
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onPress={(location) => {
                        const { coordinate } = location.nativeEvent;
                        const newMarker = {
                            coordinate,
                            title: '새로운 마커', // 마커의 제목
                            description: '이것은 새로운 마커입니다.', // 마커의 설명
                        };
                        setMarkers([...markers, newMarker]); // 새로운 마커를 마커 목록에 추가
                        console.log(markers)
                        console.log(process.env.MAP_MARKER_MAXIMUM)
                    }}
                >
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
