import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';


describe('Array deestructuring test', () => { 
    
    const testArray = ['ABC', 123];
    const prodArray = retornaArreglo();

    test('retornaArreglo() should return specified array', () => { 
        
        expect(prodArray).toEqual(testArray);
        
    })

    test('Deestructured objects should be the same', () => { 
        
        const [letters, numbers] = testArray;
        const [alphabetic, numeric] = prodArray;
 
        expect(letters).toBe(alphabetic);
        expect(typeof letters).toBe('string');

        expect(numbers).toBe(numeric);
        expect(typeof numbers).toBe('number');
    })


})