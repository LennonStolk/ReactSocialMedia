import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Post } from '../../../models/post'
import './PostElement.css'

function PostElement(props: { post: Post }) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100));

    // Rendert een ingedrukte of niet ingedrukte like knop
    function renderLikeButton() {
        if (liked)
            return <button className='post-like like-enabled' onClick={ () => toggleLiked() }> { likes } Likes 👍</button>
        else
            return <button className='post-like' onClick={ () => toggleLiked() }> { likes } Likes 👍</button>
    }

    // Telt een like op, of trekt een like af
    function toggleLiked() {
        if (liked)
            setLikes(likes - 1)
        else
            setLikes(likes + 1)

        setLiked(!liked);
    }

    // Rendert linkt naar profiel als die bestaat
    function renderProfileLink() {
        if (props.post.userId == 0)
            return <>{ props.post.user?.name }</>
        else
            return <Link to={ "/users/" + props.post.userId }>{ props.post.user?.name }</Link>
    }

    return (
        <li className='post-element'>
            <h3 className='post-author'> 
                { renderProfileLink() }
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