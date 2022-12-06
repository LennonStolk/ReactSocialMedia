import { User } from '../../../models/user'
import './ProfileCompany.css'

function ProfileCompany(props: { user: User }) {
    return (
        <section className='company-section'>
            <h3 className='company-label'>Company: </h3>
            <div className='company-block'>
                <h4 className='company-name'> { props.user.company?.name } </h4>
                <h4 className='company-catchphrase'> { props.user.company?.catchPhrase } </h4>
            </div>
        </section>
    )
}

export default ProfileCompany