import './ProfileImage.css'

function ProfileImage() {
    return (
        <div className="profile-image-border">
            <img src="http://thispersondoesnotexist.com/image" alt="" className='profile-image' loading={'eager'}/>
        </div>
    )
}

export default ProfileImage