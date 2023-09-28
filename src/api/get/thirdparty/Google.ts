export const getLocationByCoordinate = (latitude: number, longitude: number) => {
    const location = `${latitude},${longitude}`;
    const googleAPIUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`
    const response = fetch(googleAPIUrl);
    return response.then(res => res.json());
}

