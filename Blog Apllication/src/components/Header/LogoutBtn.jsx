 import React from 'react'
 import { UseDispatch, useDispatch } from 'react-redux'
 import authService from '../../Appwrite/auth'
import { logout } from '../../Store/authslice'

 function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandlar = ()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
   return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
   )
 }
 
 export default LogoutBtn