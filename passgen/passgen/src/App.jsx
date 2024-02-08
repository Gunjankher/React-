import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (-
   <div
   className="wfull max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500   "
   >
<h1 className='text-white text-center my-3  font-serif'> Password Generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-5">
<input type="text"
className='outline-none w-full py-1 px-3 '
placeholder='Password'

/>

<button
className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
> Copy</button>


</div>

<div className='flex text-sm gap-x-2 '>
<div className='flex items-center gap-x-1'>
<input type="range"
 min={6}
 max={100}
 className='cursor-pointer'
 />
 <label>Length</label>


</div>
<div 
className='flex items-center gap-x-1'
><input type="checkbox"
 id="" 
 />
<label> Numbers</label>
</div>

<div
className='flex items-center gap-x-1'
>
<input type="checkbox"
  id=""
   />
<label>Characters</label>
</div>

</div>

   </div>
  )
}

export default App
 