import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("")

  return (
    <div className=" h-screen duration-200  snap-none" style={{backgroundColor:color}}
    >
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-xl">
         
         <button
           onClick={()=>setColor("red")} 
           className="bg-red-700 rounded-xl px-3 py-1  flex items-center justify-center">red</button>
         <button
         onClick={()=> setColor("yellow")}
          className="bg-yellow-400 rounded-xl px-3 py-1  flex items-center justify-center">yellow</button>
         <button onClick={()=> setColor("green")}className="bg-green-700 rounded-xl px-3 py-1  flex items-center justify-center">green</button>
         <button onClick={()=> setColor("blue")}className="bg-blue-700 rounded-xl px-3 py-1  flex items-center justify-center">blue</button>
         <button onClick={()=> setColor("white")} className="bg-white rounded-xl px-3 py-1  flex items-center justify-center">white</button>
         <button onClick={()=> setColor("orange")} className="bg-orange-700 rounded-xl px-3 py-1  flex items-center justify-center">orange</button>
         <button onClick={()=> setColor("grey")} className="bg-slate-500 rounded-xl px-3 py-1  flex items-center justify-center">grey</button>
         <button onClick={()=> setColor("lime")}className="bg-lime-500 rounded-xl px-3 py-1  flex items-center justify-center">lime</button>
         </div>
       </div>
     </div>
  )
}

export default App 