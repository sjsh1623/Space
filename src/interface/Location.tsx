export interface Coordinate {
    latitude: number;
    longitude: number;
}

export interface Address {
    coordinate: Coordinate;
    address: string;
    title: string;
    option : 'UnderGround'| 'aboveGround'| 'noneSet';
    floor : number[];
}
