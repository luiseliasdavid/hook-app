import { act,renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Probando useForm', () => {

    const initialForm = {
        name: 'luis',
        email: 'qqq@qqq.com'
    }

    test('debe regresar la informacion por defecto', () => {
        
      const {result} = renderHook(()=> useForm(initialForm));
      
      expect(result.current).toEqual({
        name: 'luis',
        email: 'qqq@qqq.com',
        onResetForm: expect.any(Function),        
        onInputChange: expect.any(Function)        
      })

    });
    test('debecambiar el nombre del formulario', () => {
        
      const {result} = renderHook(()=> useForm(initialForm));
      const {onInputChange} = result.current

        act(() => {
        onInputChange({target:{ name:'name', value:'pepe' }}) 
       });

       expect(result.current).toEqual({
        name: 'pepe',
        email: 'qqq@qqq.com',
        onResetForm: expect.any(Function),        
        onInputChange: expect.any(Function)         
      })  

    });
    test('debe de realizar el reset del formulario', () => {
        
      const {result} = renderHook(()=> useForm(initialForm));
      const {onResetForm,onInputChange} = result.current

        act(() => {
        onInputChange({target:{ name:'name', value:'pepe' }}  )  
        onResetForm()
       });

       expect(result.current).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        onResetForm: expect.any(Function),        
        onInputChange: expect.any(Function)         
      })  

    });
    
});