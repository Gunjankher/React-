import { useEffect, useRef } from 'react'
import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charall, setCharAll] = useState(false)
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState('copy')

  // UseRef case

  const passwordRef = useRef(null)

const passswordGenerator = useCallback (()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQSTRVWXYZabcdefghijklmnopqrstuvwxyz"
if(number)str+="0123456789"
if(charall)str+="!@#$%^&*~`/*" 
for (let i = 1; i<=length; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)  
}
setPassword(pass)
setCopy('copy')
}, [length,number,charall ,setPassword])


const copyPasswordToClipboard = useCallback(()=>{
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0,999)
window.navigator.clipboard.writeText(passwordRef.current.value).then ( ()=>{
  setCopy('Copied')
})
},[passwordRef])


useEffect(()=>{
  passswordGenerator()
},[length,number,charall,passswordGenerator])

useEffect(()=>{
  setCopy('copy')
},[length,number,charall])

  return (
   <div className="w-full  max-w-md mx-auto rounded-lg py-3 px-3  my-8 bg-gray-800 text-orange-500  ">

<h1 className=" text-center text-white font-serif text-2xl">Password Generator</h1>
<div className="flex rounded-lg overflow-hidden mt-4 outline-none">
<input
className="w-full px-3 py-2"
type="text" 
value={password}
placeholder="Password"
ref={passwordRef}

/>

<div
className={`bg-blue-600 outline-none px-3 items-center flex cursor-pointer ${
  copy === "Copied"? 'text-green-500' : ''
}`}
onClick={copyPasswordToClipboard}
>{copy}
</div>


</div>

<div
className="flex text-sm gap-x-2"
>

  <div className="flex items-center gap-x-1 my-2" >
<input type="range" 
className=" "
min={6}
max={100}
value={length}
onChange={(e) => {setLength(e.target.value)}}
id="" />
<label>Length: {length}</label>
</div>
<div
className="flex gap-x-1 items-center">

  <input type="checkbox" 
   id="numinput" 
   defaultChecked={number}
   className=""
   onChange={() => {
    setNumber((prev) => !prev )
}}
   
   />

   <label htmlFor='numinput'>Numbers</label>

  
</div>

<div
className="flex gap-x-1 items-center">

  <input type="checkbox" 
   id="charinput" 
   defaultChecked={charall}
   className=""
   onChange={() => {
    setCharAll((prev) => !prev);
}}
   
   />

   <label htmlFor='charinput'>Characters</label>

  
</div>


</div>




   </div>


)
}

export default App
