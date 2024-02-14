import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'
import UserContextProvider from '../context/UserContextProvider'

function login() {


    
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState ("")
    
    const {setUser} = useContext(userContext)

  const handleSubmitbtn =(e)=>{
e.preventDefault()
setUser({username,password})

}


  return (
    <div>

        
<input type="text"
placeholder='enter your email'
value={username}
onChange={(e)=> setUsername(e.target.value)}


/>
<input type="text"
placeholder='enter your password'
value={password}
onChange={(e)=> setPassword(e.target.value)}
/>
<button

onClick={handleSubmitbtn}
>
     Submit</button>


    </div>
  )
}

export default login