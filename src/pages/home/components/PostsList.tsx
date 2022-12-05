import { useEffect, useState } from 'react'
import { PostsService } from '../../../api-service/posts-service';
import { Post } from '../../../models/post';
import './AppTitle.css'
import PostElement from './PostElement';

function PostsList() {

    const [posts, setPosts] = useState<Post[]>([]);

    // Haal de lijst met posts op voordat de lijst rendert
    useEffect(() => {
        let postsService = new PostsService();
        postsService.getPosts().then(allPosts => {
            setPosts(allPosts);
        });
    }, []);

    // Render voor elke post die opgehaald is een Post element
    function renderPosts() {
        return posts.map(post => 
            <PostElement post={ post } key={ post.id.toString() }/>
        );
    }

    return (
        <ul>
            { renderPosts() }
        </ul>
    )
}

export default PostsList