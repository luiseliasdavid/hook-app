import { render, screen } from "@testing-library/react";
import { UseContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Probando componente <HomePage/>', () => {
    const user= {
        id:1,
        name: 'luis',
        email: 'qqq@qqq.com',
    }

    test('debe mostrar el componente sin el usuario', () => {
        render(
         <UseContext.Provider value={{user:null}}>
         <HomePage/>
         </UseContext.Provider>
        )
       
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe(" null ")
    });
    test('debe mostrar el componente con el usuario', () => {
        render(
         <UseContext.Provider value={{user:user}}>
         <HomePage/>
         </UseContext.Provider>
        )
        screen.debug()

        const preTag = screen.getByLabelText('pre')
         
        expect(preTag.innerHTML).toContain(user.name)
    });

    
});
