import { useParams } from 'react-router-dom'
import './Profile.css'

function Profile() {

  const { userId } = useParams();

  return (
    <div className='container'>
      <main>
            hello world, user { userId }
      </main>
    </div>
  )
}

export default Profile