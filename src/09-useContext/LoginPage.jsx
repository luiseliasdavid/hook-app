import React, {useContext} from 'react'
import { UseContext } from './context/UserContext';

export const LoginPage = () => {

  const {user,setUser} = useContext(UseContext);

 

  return (
    <>
    <div>Login Page</div>

    <pre> {JSON.stringify(user,null,3)} </pre>

    <button
    className='btn btn-primary'
    onClick={()=>{ setUser({id:123,name:'luis',email: 'qqq@qqq.com'})  }}
    >set user</button>
    </>
  )
}