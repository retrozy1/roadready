import axios from 'axios';
import {
    Badges,
    Drivers,
    Drives,
    StateDrivingRequirements,
    Users
} from './resources'

export default class Client {
    axiosClient = axios.create({
        baseURL: 'https://www.roadreadyapp.com/api/v1/'
    });

    authentication_token: string;

    badges = new Badges(this);
    drivers = new Drivers(this);
    drives = new Drives(this);
    stateDrivingRequirements = new StateDrivingRequirements(this);
    users = new Users(this);
}