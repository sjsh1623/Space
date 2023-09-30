import {Animated, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Geolocation from "react-native-geolocation-service";
import {getLocationByCoordinate} from "api/get/thirdparty/Google";
import {BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView} from "@gorhom/bottom-sheet";
import {MaterialIcons} from '@expo/vector-icons';

interface Coordinate {
    latitude: number;
    longitude: number;
}

interface Address {
    coordinate: Coordinate;
    address: string;
    title: string;
}

export default function PinLocation() {
    const [addressList, setAddressList] = useState<Array<Address | undefined>>([]);
    const [location, setLocation] = useState<Coordinate | undefined>();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
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
        <BottomSheetModalProvider>
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
                        handlePresentModalPress()
                        setAddressList([...addressList, address]);
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

            <BottomAddressSheet props={{bottomSheetModalRef, addressList}}/>
        </BottomSheetModalProvider>
    );
}

const BottomAddressSheet = ({props}) => {
    const {bottomSheetModalRef, addressList} = props;
    const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);
    const renderItem = useCallback((item) => (addressElement(item)), []);
    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={false} // Make this bottom sheet never disappear
        >
            <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                {addressList.map(renderItem)}
            </BottomSheetScrollView>
        </BottomSheetModal>
    )
}

const addressElement = (address: Address) => {
    return (
        <View style={element.container}>
            <View style={element.leftIcon}>
                <MaterialIcons name="local-parking" size={24} color="black"/>
            </View>
            <View style={element.rightContent}>
                <Text style={element.username}>{address.title}</Text>
                <Text style={element.message}>{address.address}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
    },
    contentContainer: {
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
});

const element = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    leftIcon: {
        marginRight: 16,
    },
    rightContent: {
        flex: 1,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    message: {
        fontSize: 14,
    },
});
