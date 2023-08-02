import { useEffect, useState } from "react"

const useOnline = () => {
  const [isOnline,setIsOnline] = useState(true);
  //empty dependency array,since we want it to run only once
  useEffect(()=>{
    const handleOnline = () =>{
      setIsOnline(true);
    };
    const handleOffline = () =>{
      setIsOnline(false);
    };
    window.addEventListener('online',handleOnline);
    window.addEventListener('offline',handleOffline);

    return () => {
      //hook will be removed in unmount cycle
      window.removeEventListener('online',handleOnline);
      window.removeEventListener('offline',handleOffline);
    }
  },[]);
  return isOnline;
}
export default useOnline;