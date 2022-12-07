import { User } from "../models/user";
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
        let user: User = await response.json();

        // Haal de posts van de gebruiker op en zet deze in het gebruiker object
        let postsResponse = await fetch(this.apiBaseUrl + "users/" + userId + "/posts");
        let posts = await postsResponse.json();
        user.posts = posts;

        return user;
    }
}