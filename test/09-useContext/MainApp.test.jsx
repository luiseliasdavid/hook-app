import {MainApp} from '../../src/09-useContext/MainApp';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp/>', () => {
   
    test('mostrar el hompage', () => {
        render(
            //se utiliza un router para testear
            <MemoryRouter >
                <MainApp/>
            </MemoryRouter>
        )

      expect( screen.getByText('home Page')).toBeTruthy()

    });
    test('debe mostrar login page', () => {
        render(
            //probando si se puede acceder a la ruta
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp/>
            </MemoryRouter>
        )
         screen.debug()
        expect( screen.getByText('Login Page')).toBeTruthy()

    });
    


});