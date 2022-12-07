import { useEffect } from "react";


export const Message = () => {


useEffect(() => {
    console.log("component Mounted");

    return () => {
        console.log(" UNmounted")
    };
},[]);



  return (
    <h3>usuario ya existe</h3>
  )
}
