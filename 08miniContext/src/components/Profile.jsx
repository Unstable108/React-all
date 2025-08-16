import React , {useContext} from 'react'
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user}= useContext(UserContext);
    console.log(user);
    //if no user
    if(!user) return <h2>Please Login</h2>

    return <div>
        <h2>Profile</h2>
        <p>Username: {user.username}</p>
    </div>
}

export default Profile