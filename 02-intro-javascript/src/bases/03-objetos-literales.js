
//object literals are akin to dictionaries

const persona ={
    nombre: 'Jotaro',
    apellido: 'Kujo',
    edad: 45,  //good practice to include commas
    direccion: { //nested objects
        ciudad: 'Morioh',
        zipcode: '11221',
        lat: '24',
        long: '-25'
    }
};

const persona2 = { ...persona }; //cloning object
persona2.nombre = 'Jolyne';
persona2.edad = '19';

//console.table(persona);
//properties appear in alphabetical order in the browser
console.log(persona);
console.log(persona2);