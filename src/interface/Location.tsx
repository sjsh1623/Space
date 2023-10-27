export interface Coordinate {
    latitude: number;
    longitude: number;
}

export interface Address {
    coordinate: Coordinate;
    address: string;
    title: string;
    floor : number[];
    index : number;
}
