import React,{useEffect, useMemo, useState} from "react";

export default function App()  {
   const [number,setNumber] = useState(0);
   const [dark,setDark] = useState(false);
  //  const doubleNumber = slowFunction(number);
  //First use Case
   const doubleNumber = useMemo(()=>{
    return slowFunction(number);
   },[number]);
  //  const themedStyles = {
  //   backgroundColor : dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  //  };
  //Second use case
  const themedStyles = useMemo(() => { 
    return {
       backgroundColor : dark ? 'black' : 'white',
       color: dark ? 'white' : 'black'
      }
    },[dark]);

  useEffect(()=>{
    console.log('Theme changed!'),
    [themedStyles]
  });

return (
  <>
  <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
  <button onClick={()=>setDark(prevDark => !prevDark)}>Change Theme</button>
  <div style={themedStyles}>{doubleNumber}</div>
  </>
)
}

function slowFunction(num){
  console.log('Calling slow function');
  for(let i = 0;i<=1000000000;i++){

  }
  return num*2;
}