import {useEffect,useReducer} from 'react'
import {todoReducer } from '../08-useReducer'

export const useTodos = () => {
    const initialState = []

    const init = ()=> {
      return JSON.parse(localStorage.getItem('todos'));
     }

     const [todos, dispatch] = useReducer(todoReducer, initialState, init)

     const todosCount= todos? todos.length : 0

     const pendingTodos= todos?.filter(todo=> todo.done===false).length

     useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])
      
     

     const onNewTodo = (todo) => {
        const action = {
         type: '[TODO] add todo',
         payload: todo
        } 
        dispatch(action)
          }
     
       const HandleDeleteTodo = (id) =>{
         
         dispatch({
           type: '[TODO] remove todo',
           payload: id
         })
       }
       const onToggleTodo = (id) =>{
         
         dispatch({
           type: '[TODO] toggle todo',
           payload: id
         })
       }

       return{
        onNewTodo,
        onToggleTodo,
        HandleDeleteTodo,
        todos,
        todosCount,
        pendingTodos

       }

}
