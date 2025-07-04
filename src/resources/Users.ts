import Client from '../Client';
import { NewUserSettings, DriverSettings, User } from '../types';

const page = 'users';

export default class Users {
    constructor (private client: Client) {}

    async get(id: string): Promise<User> {
        return await this.client.axiosClient.get(`${page}/${id}`);
    }

    post = {
        signUp: async (userSettings: NewUserSettings, initialDriver: DriverSettings): Promise<User> => {
            return await this.client.axiosClient.post(page, {
                user: userSettings,
                driver: initialDriver
            });
        },
        signIn: async (email: string, password: string, timeZone?: string): Promise<User> => {
            return await this.client.axiosClient.post(`${page}/sign_in`, {
                user: {
                    email,
                    password
                },
                timeZone: timeZone ?? null
            });
        }
    };
}