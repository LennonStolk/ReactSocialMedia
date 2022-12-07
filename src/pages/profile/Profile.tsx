import { useParams } from 'react-router-dom'
import './Profile.css'
import ProfileImage from './components/ProfileImage'
import ProfileData from './components/ProfileData';
import { useEffect, useState } from 'react';
import { UsersService } from '../../api-service/users-service';
import { User } from '../../models/user';
import ProfileCompany from './components/ProfileCompany';
import ProfilePosts from './components/ProfilePosts';

function Profile() {

  const { userId } = useParams();
  const [user, setUser] = useState<User>(new User(0, "-", "-", "-"));

  // Haal de user op voordat de profiel pagina rendert
  useEffect(() => {
    if (!userId) return;

    // Haalt de user op via de userservice
    let usersService = new UsersService();
    usersService.getUserById(+userId).then((user) => {
      setUser(user);
    })
  }, []);

  return (
    <div className='container'>
      <main>
        <div className="side-by-side">
            <ProfileImage userId={userId}></ProfileImage>
            <ProfileData user={user}></ProfileData>
            <ProfileCompany user={user}></ProfileCompany>
            <ProfilePosts user={user}></ProfilePosts>
        </div>
      </main>
    </div>
  )
}

export default Profile