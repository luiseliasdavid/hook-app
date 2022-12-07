import {useState} from 'react'
import { useForm } from '../hooks/useForm'
import { Message } from './Message'

export const FormWithCustomHook = () => {

   const {username, email, password, onInputChange,onResetForm} = useForm({
      username: '',
      email:'',
      password:''
   })

   

  return (
    <>
        <h1>formulario Con custom hook</h1>
        <hr/>
        <input
           type='text'
           className='form-control'
           placeholder='Username'
           name='username'
           value= {username}
           onChange={onInputChange}         
        />
        <input
           type='text'
           className='form-control mt-2'
           placeholder='example@example.com'
           name='email'
           value= {email}
           onChange={onInputChange} 
        />
        <input
           type='text'
           className='form-control mt-2'
           placeholder='password'
           name='password'
           value= {password}
           onChange={onInputChange} 
        />
      <button onClick={onResetForm} className='btn btn-primary mt-2'>reset from</button>
   </>
  )
}