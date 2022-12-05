import { useState } from 'react'
import { Post } from '../../../models/post'
import './PostElement.css'

function PostElement(props: { post: Post }) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100));

    function renderLikeButton() {
        if (liked)
            return <button className='post-like like-enabled' onClick={ () => toggleLiked() }> { likes } Likes 👍</button>
        else
            return <button className='post-like' onClick={ () => toggleLiked() }> { likes } Likes 👍</button>
    }

    function toggleLiked() {
        if (liked)
            setLikes(likes - 1)
        else
            setLikes(likes + 1)

        setLiked(!liked);
    }

    return (
        <li className='post-element'>
            <h3 className='post-author'> 
                <a href={ "/users/" + props.post.userId }>{ props.post.user?.name }</a> 
                <span> van </span> 
                { props.post.user?.company?.name } 
            </h3>
            <h2 className='post-title'> { props.post.title } </h2>
            <p className='post-body'> { props.post.body } </p>
            { renderLikeButton() }
        </li>
    )
}

export default PostElement