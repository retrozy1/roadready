export interface NewUserSettings {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    opt_in: boolean;
    time_zone: string;
}

export interface User {
    readonly id: number;
    readonly first_name: string;
    readonly last_name: string;
    readonly opt_in: boolean;
    readonly email: string;
    readonly authentication_token: string;
}

export interface DriverSettings {
    first_name: string;
    last_name: string;
    birthday: string;
    state: string;
}

export interface Driver {
    readonly id: number;
    readonly user_id: number;
    readonly first_name: string;
    readonly last_name: string;
    readonly state: string;
    readonly time_zone: null;
    readonly birthday: string;
    readonly active: boolean;
    readonly total_drive_time: number;
    readonly total_night_drive_time: number;
}

export enum WeatherCondition {
    Normal = 1,
    Rain,
    Snow,
    Hail,
    Sleet,
    FreezingRain,
    Fog
}

export enum RoadType {
    Highway = 1,
    MajorRoad,
    LocalRoad,
    RuralRoad,
    UrbanRoad,
    ParkingLot
}

export interface DriveSettings {
    start_time: string;
    end_time: string;
    distance: string;
    daytime: boolean;
    weather_condition: WeatherCondition;
    road_type: RoadType;
    notes: string;
}

export interface Drive {
    readonly id: string;
    readonly driver_id: string;
    readonly start_time: string;
    readonly end_time: string;
    readonly distance: number;
    readonly daytime: boolean;
    readonly notes: string;
    readonly weather_condition: WeatherCondition;
    readonly road_type: RoadType;
}

export interface StateDrivingRequirement {
    readonly id: number;
    readonly state: string;
    readonly required_hours: number;
    readonly required_night_hours: number | null;
    readonly required_inclement_hours: number | null;
}

export interface Badge {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly image_url: string;
}