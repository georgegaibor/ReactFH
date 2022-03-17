import { getImagen } from "../../base/11-async-await"

describe('Fetch Tests', () => { 
    
    test('Should return the url+API Key', async() => { 
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })    
    
    



})