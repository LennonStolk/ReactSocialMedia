import { ApiServiceConfig } from "./api-service-config";
import { ApiServiceUtils } from "./api-service-utils";
import { Post } from "../models/post";

export class PostsService {

    apiBaseUrl: string;

    constructor() {
        this.apiBaseUrl = ApiServiceConfig.apiBaseUrl;
    }

    // Haal alle posts op
    async getPosts() {
        let response = await fetch(this.apiBaseUrl + "posts");
        let posts = await response.json();
        return posts;
    }

    // Haal alle posts van een gebruiker op
    async getPostsByUserId(userId: number) {
        let response = await fetch(this.apiBaseUrl + "users/" + userId + "/posts");
        let posts = await response.json();
        return posts;
    }

    // Maak een nieuwe post aan
    async createPost(post: Post) {
        let response = await fetch(this.apiBaseUrl + "posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        let newPost = await response.json();
        return newPost;
    }
}