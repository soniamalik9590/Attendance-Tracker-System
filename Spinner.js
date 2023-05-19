import React, { useState ,useEffect} from 'react';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';


export default function Spinner() {
    const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsLoading(false);
        },3000);
    },[]);
  return (
    <div>
        {isLoading ? <SplashScreen/>:<HomeScreen/>}
    </div>
  )
}

