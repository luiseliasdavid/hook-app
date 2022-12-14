import React, { useContext } from 'react'
import { UseContext } from './context/UserContext'

export const HomePage = () => {

  const {user} = useContext(UseContext)

  return (
    <>
    <div>home Page {user?.name} </div>
    <pre> {JSON.stringify(user,null,3)} </pre>
    </>
  )
}