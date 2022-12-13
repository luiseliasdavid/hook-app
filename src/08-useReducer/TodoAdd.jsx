import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {useForm} from '../hooks/useForm'

export const TodoAdd = ( {onNewTodo} ) => {

  const {description, onInputChange, onResetForm} = useForm({
       description: '',
     })
  const handleSubmmit = (e) => {
     e.preventDefault();
     if (description.length<=1) return
    
     onNewTodo({
      id: new Date().getTime(),
      done: false,
      description: description,
    })
    onResetForm()
    
 }
  
  return (
    <form onSubmit={handleSubmmit}>
            <input 
            type='text' 
            placeholder='¿Que hay que hacer?'
            className='form-control'
            name='description'
            value={description}  
            onChange={onInputChange}
            />
             <button  type='submmit' className='btn btn-primary mt-1'>
                Agregar Todo
             </button> 
            </form>
  )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}
