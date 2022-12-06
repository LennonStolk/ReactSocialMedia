import './ProfileImage.css'

function ProfileImage(props: { userId: string | undefined }) {
    return (
        <div className="profile-image-border">
            <img src={"http://thispersondoesnotexist.com/image?key=" + props.userId } className='profile-image' loading={'eager'}/>
        </div>
    )
}

export default ProfileImage