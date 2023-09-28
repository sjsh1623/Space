import {Animated, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {useEffect, useState} from "react";
import Geolocation from "react-native-geolocation-service";
import {getLocationByCoordinate} from "./src/api/get/thirdparty/Google";
import add = Animated.add;

interface Coordinate {
    latitude: number;
    longitude: number;
}

interface Address {
    coordinate: Coordinate;
    address: string;
    title: string;
}

export default function App() {
    const [addressList, setAddressList] = useState<Array<Address | undefined>>([]);
    const [location, setLocation] = useState<Coordinate | undefined>();
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
                    onPress={async (location) => {
                        const {coordinate} = location.nativeEvent;
                        const addressInfo = await getLocationByCoordinate(coordinate.latitude, coordinate.longitude);
                        const formattedAddress = addressInfo.results[0].formatted_address
                        const shortName = addressInfo.results[0].address_components[1].short_name;
                        const address: Address = {
                            coordinate: coordinate,
                            address: formattedAddress,
                            title: shortName
                        }
                        setAddressList( [...addressList, address]);
                    }}
                >
                    {addressList.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.address}
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
