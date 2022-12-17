import React, { useContext } from 'react'
import { UseContext } from './context/UserContext'

export const HomePage = () => {

  const {user} = useContext(UseContext)

  return (
    <>
    <div>home Page {user?.name} </div>
    <pre aria-label='pre'> {JSON.stringify(user,null,3)} </pre>
    </>
  )
}