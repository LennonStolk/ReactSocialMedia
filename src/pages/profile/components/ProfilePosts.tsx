import { User } from '../../../models/user';
import './ProfilePosts.css'

function ProfilePosts(props: { user: User }) {

    function renderPosts() {
        return props.user.posts?.map(post => 
            <div className="post-block" key={post.id}>
                "{ post.title }"
            </div>
        );
    }

    return (
        <section className="posts-section">
            <h3 className="posts-label">Posts:</h3>
            { renderPosts() }
        </section>
    )
}

export default ProfilePosts