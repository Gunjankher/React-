import React, { useContext } from 'react'
import userContext from '../context/userContext'


function Profile() {

    const {user} = useContext(userContext)
    console.log(user);

if (!user) return <div>Pls Login </div>
const username = user.username
 return <div> welcome {username}</div>

}

export default Profile