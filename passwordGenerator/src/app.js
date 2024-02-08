import { useCallback, useState , useEffect} from 'react' 

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordgenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"

    for (let i = 1; i<=length; i++) {
       if (number) str+= "0123456789"
       if (char) str+="!@#$%^&*()-=_+[]{}|;:'?"
       for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        
      }
      
    }
    setPassword(pass)
  }, [length,number,char,setPassword] )

  useEffect(()=>{
    passwordgenerator()

  },[length,number,char,passwordgenerator])


  return (
    <>
    <div className="text-white text-4xl text-center items-center justify-center my-36">Password Generator
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-9  py-12 text-orange-500 bg-gray-700 text-center flex">
      <input 
      type="text"
      value={password}
      className="outline-none w-full py-1 px-40 rounded-lg flex" 
      placeholder='Password'
       />
       <button 
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
      > copy</button>
      
      
<div className='flex text-sm gap-x-2 relative top-12 right-60'>
  <div className='items-center gap-x-1 '>

<input type="range"
 min={6}
 max={100}
 value={length}
 className='cursor-pointer'
 onChange={(e)=>{setLength(e.target.value)}}

 />

 <label>Length : {length}</label>

</div>
<input type="checkbox"
defaultChecked= {number}
id= "numberinput"
onChange={()=>{
  setNumber((prev)=> !prev)
}}
 />
 <label htmlFor="numberinput">Numbers</label>
 
  <div className='flex items-center gap-x-1'>
<input type="checkbox"
defaultChecked= {char}
id= "charinput"
onChange={()=>{
  setChar((prev)=> !prev)
}}
 />
 <label htmlFor="chatinput">Characters</label>
  </div>
</div>
</div>
</div>
   
    </>
  )
}

export default App 
