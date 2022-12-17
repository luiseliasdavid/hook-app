import { render, screen } from "@testing-library/react";
import  {TodoApp} from '../../src/08-useReducer/TodoApp';
import { useTodos } from "../../src/hooks";

//se crea un mock de useTodos
jest.mock("../../src/hooks")


describe('Pruebas en <todoApp/>', () => {
    //se setean los valores que va a delvolver useTdoso
    useTodos.mockReturnValue({
      todosCount:2,
      pendingTodos: 1,
      onNewTodo:jest.fn(),
      onToggleTodo: jest.fn(),
      HandleDeleteTodo: jest.fn(),
      todos: [
               {id: 1,description: 'todo 1',done: false},
               {id: 2,description: 'todo 2',done: true}
            ]
    })

    test('debe mostrar el componente correctamente', () => {
    
        render(<TodoApp/>);
        screen.debug()

       expect(screen.getByText('todo 1')).toBeTruthy()
       expect(screen.getByText('todo 2')).toBeTruthy()
       expect(screen.getByRole('textbox')).toBeTruthy()

    });





});