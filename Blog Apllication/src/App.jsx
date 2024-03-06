import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authSlice from './Store/authslice'

function App() {
  const [count, setCount] = useState(0)

  console.log(import.meta.env.VITE_APPWRTIE_URL);
  console.log(authSlice);
  return (
    <h1>a Blog App with appwrite</h1>
  )
}

export default App
