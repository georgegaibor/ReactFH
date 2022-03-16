describe('Pruebas en demo.test.js', () => {  
    
    test('1. Strings should be equal', () => { 
        //1.Arrange
        const mensaje = 'Hola';
        //2.Act
        const msj = `Hola`;
        //3.Assert
    
        expect(msj).toBe(mensaje); // ===
    
    })
    

});



