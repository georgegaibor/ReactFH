import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';


describe('getHeroe function tests', () => { 

    test('Should return the correct heroe based on id', () => { 
        const id = 1;
        const testHeroe = heroes.find(h => h.id === id);
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(testHeroe);

    })

    test('getHeroeById should return undefined when id is out of bounds', () => { 
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
        
    })

    test('Should return the correct heroes based on owner', () => { 
        const owner = 'Marvel';
        const testHeroes = heroes.filter(h => h.owner === owner );

        const marvelHeroes = getHeroesByOwner(owner);
        
        expect(marvelHeroes).toEqual(testHeroes);
        expect(marvelHeroes.length).toBe(2);

    })

    test('getHeroesByOwner should return an empty array if the owner doesnt exist', () => { 
        const owner = 'Louise';
        const emptyHeroes = getHeroesByOwner(owner);
        
        expect(emptyHeroes).toEqual([]);

    })

})