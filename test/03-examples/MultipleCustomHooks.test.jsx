import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

//se realiza uan simulacion del useFetch
jest.mock("../../src/hooks/useFetch")

describe('Probando miltipleCustomHooks', () => {
    //se crea una simulacion de la funcion
    const NextQuote = jest.fn()
    // se vuelven los mocks al estado inicial antes de cada test
    beforeEach( ()=>{
        jest.clearAllMocks()
    } )

    test('debe mostrar el componente por defecto', () => {
        
        //se setean los valores que devuelve el useFetch
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
      
        render(<MultipleCustomHooks/>)
        const Nextbutton = screen.getByRole('button', {name:'Next quote'} )
        
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Chuck Norris quotes'))
        expect(Nextbutton).toBeTruthy()
    });

    test('debe de mostrar un quote', () => {
        
        useFetch.mockReturnValue({
            data: {value:'luis elias david', created_at:'1234567891hoy dia'},
            isLoading: false,
            hasError: null
        })
        
        render(<MultipleCustomHooks/>)
        expect(screen.getByText('luis elias david')).toBeTruthy()
        expect(screen.getByText('1234567891')).toBeTruthy()
    });
    test('debe llamar a la funcion nextQuote', () => {
        
        useFetch.mockReturnValue({
            data: {value:'luis elias david', created_at:'1234567891hoy dia'},
            isLoading: false,
            hasError: null
        })
        
        
        render(<MultipleCustomHooks/>)
       
        const nextButtom = screen.getByRole('button',{name: 'Next quote'})
        fireEvent.click(nextButtom)
        
       expect(NextQuote).toBeCalled
    });
    
    
});
