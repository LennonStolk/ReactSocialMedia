import { useParams } from 'react-router-dom'
import './Profile.css'
import ProfileImage from './components/ProfileImage'

function Profile() {

  const { userId } = useParams();

  return (
    <div className='container'>
      <main>
        <ProfileImage userId={userId}></ProfileImage>
      </main>
    </div>
  )
}

export default Profile