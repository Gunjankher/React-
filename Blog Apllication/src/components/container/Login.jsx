import React from 'react'
import { useNavigate } from 'react-router-dom'
import {login as authlogin, login } from '../../Store/authslice'
import authService from '../../Appwrite/auth'
import { UseDispatch, useDispatch } from 'react-redux'
import { Button,Input,Logo } from '../index'
import {useForm} from  "react-hook-form"

function Login() {
const dispatch = useDispatch()
const navigate = useNavigate()
const {register, handleSubmit} = useForm()
const [error , setError] = useState('')


const login = async (data) =>{
setError("")
try {
    const session = await authService.login(data)
    if(session){
        const userData =  await authService.getcurrentUser()
        if(userData) 
        dispatch (authlogin(userData))
    navigate("/") 
    }
} catch (error) {
    setError(error.message)
}

}



  return (
    <div>Login</div>
  )
}

export default Login