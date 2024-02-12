
// fatching the data here

import { useEffect, useState } from "react";




function usecurrencyinfo (currency){

const[data,setData] = useState({})

useEffect (()=>{

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    fetch(url)
    .then ((res) => res.json())
.then ((res)=>  setData(res[currency]) )

console.log(data);

},[currency])

return data


}

export default usecurrencyinfo