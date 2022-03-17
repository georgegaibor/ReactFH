import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Function tests', () => { 
    
    test('getUser should return specified object', () => { 
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(userTest);
    });


    test('getUsuarioActivo should return specified object', () => { 
        const testName = 'Michelangelo';
        
        const userTest = {
            uid: 'ABC567',
            username: testName
        };

        const user = getUsuarioActivo(testName);

        expect(user).toEqual(userTest);

    });


    
    
})