import Client from '../Client';
import { StateDrivingRequirement } from '../types';

const page = 'state_driving_requirement';

export default class StateDrivingRequirements {
    constructor (private client: Client) {}

    async get(driver_id: string): Promise<StateDrivingRequirement> {
        return await this.client.axiosClient.get(`drivers/${driver_id}/${page}?authentication_token=${this.client.authentication_token}`);
    }
}