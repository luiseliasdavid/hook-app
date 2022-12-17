import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UseContext } from "../../src/09-useContext/context/UserContext";

describe('Probando <LoginPage/>', () => {

   const setUserMock = jest.fn()

   const user= {
    id:1,
    name: 'luis',
    email: 'qqq@qqq.com',
}
beforeEach( () => jest.clearAllMocks() )
   
   test('debe mostrar componente sin el usuario', () => {
    render(
        <UseContext.Provider value={{user:null,setUser:setUserMock}}>
        <LoginPage/>
        </UseContext.Provider>)
     const pre = screen.getByLabelText('pre')
     expect(pre.innerHTML).toContain('null')

   });
   


   test('deberia llamar a la funcion setUser con el objeto designado', () => {
    render(
        <UseContext.Provider value={{user:user,setUser:setUserMock}}>
        <LoginPage/>
        </UseContext.Provider>)
    
    
    const button = screen.getByRole('button',{name: 'set user'})
    fireEvent.click(button)
    
    expect(setUserMock).toHaveBeenCalledWith({
        id: 123,
        name: 'luis',
        email: 'qqq@qqq.com',
    })

    

   });
   
});