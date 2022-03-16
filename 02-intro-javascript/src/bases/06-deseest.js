//console.log('gg');

//Desestructuring

const persona = {
    nombre: 'Jotaro',
    edad: '45',
    clave: 'Star Platinum'
}

const {edad, clave, nombre} = persona;

const retornaPersona = ({nombre, edad, clave, rango='JOJO'})=>{

    console.log(nombre, edad, clave, rango);

}

//deestructuring nested object
const nested = {
    latlng:{
        lat: 21.22,
        lng: -12.34
    }

}
const {latlng:{lat,lng}} = nested;

 
retornaPersona(persona);
console.log(lat,lng);