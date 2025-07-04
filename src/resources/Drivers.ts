import Client from '../Client';
import { DriverSettings, Driver, StateDrivingRequirement } from '../types';

const page = 'drivers';

export default class Drivers {
    constructor (private client: Client) {}

    get = {
        data: async (id: string): Promise<Driver> => {
            return (await this.client.axiosClient.get(`${page}/${id}?authentication_token=${this.client.authentication_token}`)).data;
        },
        stateDrivingRequirement: async (id: string): Promise<StateDrivingRequirement> => {
            return (await this.client.axiosClient.get(`${page}/${id}/state_driving_requirement?authentication_token=${this.client.authentication_token}`)).data;
        }
    };

    async list(): Promise<Driver[]> {
        return (await this.client.axiosClient.get(`${page}?authentication_token=${this.client.authentication_token}`)).data;
    }

    async post(settings: DriverSettings): Promise<Driver> {
        return (await this.client.axiosClient.post(`${page}?authentication_token=${this.client.authentication_token}`, {
            driver: settings
        })).data;
    }

    async patch(id: string, updates: Partial<DriverSettings>): Promise<Driver> {
        return (await this.client.axiosClient.patch(`${page}/${id}`, updates)).data;
    }
}