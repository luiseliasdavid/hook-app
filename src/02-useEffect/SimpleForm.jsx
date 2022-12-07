import {useState} from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

const [formState, setFormState] = useState({
    username: 'luis',
    email:'luis@google.com'
})

const {username,email} = formState

const onInputChange = ({target})=>{
    const {name, value}= target
     setFormState({
        ...formState,
        [name]:value
     })
}

  return (
    <>
        <h1>formulario simple</h1>
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
      { (username==='luis2') && <Message/>}
   </>
  )
}
