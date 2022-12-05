import { User } from './user';

export class Post {

    constructor(
        public id: number,
        public userId: number,
        public title: string,
        public body: string,
        public user?: User
    ) { }
}