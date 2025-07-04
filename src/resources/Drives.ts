import Client from '../Client';
import { Drive, DriveSettings } from '../types';

const page = 'drives';

export default class Drives {
    constructor (private client: Client) {}

    async get(driver_id: string, id: string): Promise<Drive> {
        return (await this.client.axiosClient.get(`drivers/${driver_id}/${page}/${id}?authentication_token=${this.client.authentication_token}`)).data;
    }

    async post(driver_id: string, settings: DriveSettings): Promise<Drive> {
        return (await this.client.axiosClient.post(`drivers/${driver_id}/${page}?authentication_token=${this.client.authentication_token}`, {
            drive: settings
        })).data;
    }

    /**
     * @returns The `Drive` that was deleted.
     */
    async delete(driver_id: string, id: string): Promise<Drive> {
        return (await this.client.axiosClient.delete(`drivers/${driver_id}/${page}/${id}?authentication_token=${this.client.authentication_token}`)).data;
    }
}