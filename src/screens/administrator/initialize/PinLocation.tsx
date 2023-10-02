import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import Geolocation from "react-native-geolocation-service";
import {getLocationByCoordinate} from "api/get/thirdparty/Google";
import {
    BottomSheetFooter,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView
} from "@gorhom/bottom-sheet";
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

interface Coordinate {
    latitude: number;
    longitude: number;
}

interface Address {
    coordinate: Coordinate;
    address: string;
    title: string;
}

interface Button {
    text: String;
    fontSize: number;
    isNext: boolean;
}

/**
 * {Function}
 * Get user's current location and ask a permission to track user.
 * This run at very first
 * @param setLocation Interface of
 */
const getGeoLocation = (setLocation: (value: (((prevState: Coordinate) => Coordinate) | Coordinate)) => void) => {
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
}

/**
 * {Function}
 * When user onPress map store the location along with the marker
 * @param location Clicked Location
 * @param handlePresentModalPress Open the modal when clicked
 * @param setAddressList Set address list function
 * @param addressList Address List
 */
const setLocationOnClick = async (location, handlePresentModalPress, setAddressList, addressList) => {
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
}

/**
 * {View}
 * Map loading page (Google map)
 */
const loadingView = () => {
    return (
        <View>
            <Text>Welcome</Text>
        </View>
    )
}

/**
 * {View}
 * Bottom Address view that contain clicked address
 * @param props {bottomSheetModalRef, addressList} Thing that is need to open Bottom view
 */
const BottomAddressSheet = ({props}) => {
    const {bottomSheetModalRef, addressList} = props;
    const snapPoints = useMemo(() => ['35%', '60%', '80%'], []);
    const renderItem = useCallback((item, key) => (addressElement(item, key)), []);
    const renderFooter = useCallback((item) => (bottomSheetFooterElement(item)), []);
    return (
        <View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                enablePanDownToClose={false}
                footerComponent={renderFooter}
            >
                <View style={bottomSheet.container}>
                    <Text style={bottomSheet.title}>주차장 선택</Text>
                    <Text style={bottomSheet.description}>최대 {process.env.EXPO_PUBLIC_MAP_MARKER_MAXIMUM}개 선택할 수
                        있습니다.</Text>
                </View>
                <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
                    {addressList.map(renderItem)}
                </BottomSheetScrollView>
            </BottomSheetModal>
        </View>

    )
}

/**
 * {View}
 * Element that is for address list element
 * @param address Address Interface
 * @param key Unique key
 */
const addressElement = (address: Address, key: number) => {
    return (
        <View key={key} style={scrollElement.container}>
            <View style={scrollElement.leftIcon}>
                <MaterialIcons name="local-parking" size={24} color="black"/>
            </View>
            <View style={scrollElement.rightContent}>
                <Text style={scrollElement.title}>{address.title}</Text>
                <Text style={scrollElement.description}>{address.address}</Text>
            </View>
        </View>
    );
}
/**
 * Space for the Button on the BottomView
 * @param item
 */
const bottomSheetFooterElement = (item) => {
    return (
        <BottomSheetFooter {...item} bottomInset={0}>
            <View style={{height: 80, backgroundColor: 'white'}}></View>
        </BottomSheetFooter>
    )
}

export default function PinLocation() {
    const [addressList, setAddressList] = useState<Array<Address | undefined>>([]);
    const [location, setLocation] = useState<Coordinate | undefined>();
    const [buttonConf, setButtonConf] = useState<Button>({text: '사용하실 주차장의 위치를 선택해주세요.', fontSize: 12, isNext: false});
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentModalPress = useCallback(() => {
        setButtonConf({text: '다음', fontSize: 16, isNext: true})
        bottomSheetModalRef.current?.present();
    }, []);

    useEffect(() => {
        getGeoLocation(setLocation)
    }, []);

    if (!location) return (loadingView());
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
                        await setLocationOnClick(location, handlePresentModalPress, setAddressList, addressList)
                    }}
                >
                    {addressList.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.address}
                        >
                            <MaterialCommunityIcons name="map-marker-check" size={34} color="black"/>
                        </Marker>
                    ))}
                </MapView>
            </View>
            <BottomAddressSheet props={{bottomSheetModalRef, addressList}}/>
            <TouchableOpacity style={bottomSheet.button}>
                <Text style={{...bottomSheet.buttonText, ...{fontSize: buttonConf.fontSize}}}>{buttonConf.text}</Text>
            </TouchableOpacity>
        </BottomSheetModalProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

const scrollElement = StyleSheet.create({
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
    },
});

const bottomSheet = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 3
    },
    title: {
        paddingBottom: 3,
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
    },
    button: {
        width: '75%',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        zIndex: 2,
    },
    buttonText: {
        color: 'white',
    }
})
