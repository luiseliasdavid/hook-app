import {todoReducer} from '../../src/08-useReducer/todoReducer';

describe('Pruebas todo reducer', () => {

const initialState = [{
    id: 1,
    description: 'demo todo',
    done: false
}]


  test('debe de regresar el estado inicial', () => {

    const newState = todoReducer(initialState,{})

    expect(newState).toBe(initialState)

  });

  test('debe agregar un todo', () => {
    const action = {
        type: '[TODO] add todo',
        payload: {
            id:2,
            description: 'nuevo todo #2',
            done:false
        }
    }
    const newState = todoReducer(initialState,action)

    expect(newState.length).toBe(2);
    //el nuevo estado debe contener el todo nuevo
    expect(newState).toContain(action.payload)

  });

  test('debe eliminar un todo', () => {
    const action = {
        type: '[TODO] remove todo',
        payload: 1
    }
    const newState = todoReducer(initialState,action)
     
    expect(newState.length).toBe(0);
  });
  
  test('debe modificar un todo', () => {
    const action = {
        type: '[TODO] toggle todo',
        payload:1
        }
    const newState = todoReducer(initialState,action)
     expect(newState[0].done).toEqual(true);
    const newState2 = todoReducer(newState,action)
     expect(newState2[0].done).toEqual(false);
  });
  


    
});