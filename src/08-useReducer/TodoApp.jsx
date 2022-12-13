import { TodoAdd,TodoList,} from '../08-useReducer'
import {useTodos} from '../hooks'


export const TodoApp = () => {
  
const {  todosCount, pendingTodos ,onNewTodo,onToggleTodo,HandleDeleteTodo,todos} = useTodos()
   
  return (
    <>
      <h1> Todo App: {todosCount}, <small>pendientes: {pendingTodos} </small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos} 
          onDeleteTodo={HandleDeleteTodo } 
          onToggleTodo={onToggleTodo} />
        </div>
        <div className='col-5'>
         <h4> Agregar Todo</h4>
         <hr/>
         <TodoAdd onNewTodo={onNewTodo} />
        </div>
      </div>
    </>
  )
}
