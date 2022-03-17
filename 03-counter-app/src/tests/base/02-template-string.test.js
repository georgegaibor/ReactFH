import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';



describe('Tests on 02-template-string', () => { 
    
    
    test('getSaludo() should return Hola name', () => { 
        const name = 'George';
        const greeting = getSaludo(name);
        
        expect(greeting).toBe('Hola '+name);
    })
    
    test('getSaludo() should return Hola Jotaro if there is no argument', () => { 
        
        const greeting = getSaludo();
        
        expect(greeting).toBe('Hola Jotaro');
    })
    
    



})