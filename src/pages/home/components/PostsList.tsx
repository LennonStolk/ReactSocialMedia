import { useEffect, useState } from 'react'
import { PostsService } from '../../../api-service/posts-service';
import { Post } from '../../../models/post';
import './AppTitle.css'
import PostElement from './PostElement';

function PostsList(props: { sortNewFirst: boolean, createdPost: Post | null }) {

    const [posts, setPosts] = useState<Post[]>([]);

    // Haal de lijst met posts op voordat de lijst rendert
    useEffect(() => {
        let postsService = new PostsService();
        postsService.getPosts().then(allPosts => {
            setPosts(allPosts);
        });
    }, []);

    // Als de sorteer volgorde verandert, draai dan de array van de posts om
    useEffect(() => {
        setPosts(posts.slice().reverse());
    }, [props.sortNewFirst]);

    // Als er een nieuwe post is gemaakt, voeg hem dan toe aan het lijstje
    useEffect(() => {
        // Checkt of created post niet al bestaat
        if (!props.createdPost) return;
        if (posts.find(post => post.id == props.createdPost?.id)) return;
        // Voegt de post toe aan het begin of eind van het array, ligt aan de sorteer volgorde
        if (props.sortNewFirst)
            setPosts([props.createdPost, ...posts]);
        else
            setPosts([...posts, props.createdPost]);
    }, [props.createdPost])

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