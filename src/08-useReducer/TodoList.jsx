import React from 'react'
import PropTypes from 'prop-types';

export const TodoList = ( {todos= [], onDeleteTodo, onToggleTodo } ) => {
   
  return (
    <ul className='list-group'>
      
    {
      todos.map(item => 
      <li key={item.id} className='list-group-item d-flex justify-content-between '>
        <span onClick={()=> onToggleTodo(item.id) } className={`align-self-center ${item.done? 'text-decoration-line-through': ''}`}>{item.description}</span>
        <button onClick={()=>onDeleteTodo(item.id)}  className='btn btn-danger'>Borrar</button>
        </li>)
    }

    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}


