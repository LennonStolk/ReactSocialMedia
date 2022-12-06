import { ApiServiceConfig } from "./api-service-config";
import { ApiServiceUtils } from "./api-service-utils";

export class UsersService {

    apiBaseUrl: string;

    constructor() {
        this.apiBaseUrl = ApiServiceConfig.apiBaseUrl;
    }

    // Haalt een gebruiker met een specifiek id op
    async getUserById(userId: number) {
        let response = await fetch(this.apiBaseUrl + "users/" + userId);
        let user = await response.json();
        return user;
    }
}