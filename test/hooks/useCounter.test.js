import { act,renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas con useCounter', () => {
    test('debe tener valores por defecto', () => {

        //utiliza render hook para poder ejecutar el hook de manera aislada
        const {result} = renderHook( () => useCounter());
        const {counter,decrement,increment, reset} = result.current

        expect(counter).toBe(10); 
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe generar el counter con valor de 100', () => {
        const {result} = renderHook( () => useCounter(100));
        const {counter} = result.current

        expect(counter).toBe(100);
        
    });
    test('debe incrementar el contador', () => {
        const {result} = renderHook( () => useCounter());
        const {counter,increment} = result.current  

        act(() => {
           increment() 
          });
        
        expect(result.current.counter).toBe(11)
    });
    test('debe decrementar el contador', () => {
        const {result} = renderHook( () => useCounter());
        const {counter,decrement} = result.current  

        act(() => {
           decrement() 
          });
        
        expect(result.current.counter).toBe(9)
    });
    test('debe resetear el contador', () => {
        const {result} = renderHook( () => useCounter());
        const {decrement,reset} = result.current  

        act(() => {
            decrement()  
           reset() 
          });
        
        expect(result.current.counter).toBe(10)
    });
    


    
});