import { render, screen , fireEvent} from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas <todoItem/>', () => {

    const todo = {
        id: 1 ,
        description: 'piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )

    test('debe mostrar el todo pendiente de completar', () => {
        
        render(<TodoItem 
        todo={todo} 
        onDeleteTodo={onDeleteTodoMock} 
        onToggleTodo={onToggleTodoMock}  
        />)
    //screen.debug()
      const liElemnt = screen.getByRole('listitem');
      expect(liElemnt.className).toBe('list-group-item d-flex justify-content-between ')
      
      const span = screen.getByLabelText('span');
      expect(span.className).toContain('align-self-center')
      expect(span.className).not.toContain('text-decoration-line-through')
    });
    test('debe mostrar el todo completo', () => {
        
        todo.done = true;

        render(<TodoItem 
        todo={todo} 
        onDeleteTodo={onDeleteTodoMock} 
        onToggleTodo={onToggleTodoMock}  
        />)
      const span = screen.getByLabelText('span');
      expect(span.className).toContain('text-decoration-line-through')
    });

    test('debe llamar al toggleTodo cuando se hace click', () => {

        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}  
        />)

      const spanElement = screen.getByLabelText('span')
     fireEvent.click(spanElement)
        
     expect(onToggleTodoMock).toBeCalledWith(todo.id)
    });
    test('debe llamar al toggleTodo cuando se hace click', () => {

        render(<TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock} 
            onToggleTodo={onToggleTodoMock}  
        />)

      const Buttom = screen.getByRole('button',{name: 'Borrar'})
     fireEvent.click(Buttom)
        
     expect(onDeleteTodoMock).toBeCalledWith(todo.id)
    });
    
    
    
});