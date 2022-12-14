import React, {useState}  from 'react'
import { UseContext } from './UserContext'

export const UserProvider = ({children}) => {

/*     const user = {
        id: 123,
        name: 'luis',
        email: 'qqq@qqq.com',
    } */

    const [user, setUser] = useState({});
    
  return (
    <UseContext.Provider value={{user,setUser}}>
        {children}
    </UseContext.Provider>
  )
}
