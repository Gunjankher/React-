import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="bg-blue-700 text-4xl m-4 p-4 rounded-lg text-white delay-800">This is Tailwind css</h1>
    <Card1 name = "Gunjan"  lorem="hi this is apple i mac" button=" "/>
    </>
  )
}

export default App
