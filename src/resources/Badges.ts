import Client from '../Client';
import { Badge } from '../types';

const page = 'badges';

export default class Badges {
    constructor (private client: Client) {}

    async list(driver_id: string): Promise<Badge[]> {
        return (await this.client.axiosClient.get(`drivers/${driver_id}/${page}?authentication_token=${this.client.authentication_token}`)).data;
    }
}