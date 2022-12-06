import { User } from '../../../models/user'
import './ProfileData.css'

function ProfileData(props: { user: User }) {

    return (
        <section className='profile-data'>
            <h2 className='profile-name'> { props.user.name } </h2>
            <p>
                <span>username:</span> { props.user.username } <br/>
                <span>e-mail:</span> { props.user.email } <br/>
                <span>phone-number:</span> { props.user.phone } <br/>
                <span>website:</span> { props.user.website } <br/>
            </p>
        </section>
    )
}

export default ProfileData