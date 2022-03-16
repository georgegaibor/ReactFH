//console.log('gg');

/*function saludar(nombre){
    return `Hola, ${nombre}`;
}
*/

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('DIO'));
console.log(saludar3('DIO'));
console.log(saludar4());

/*const getUser = ()=>{
    return {
        uid: '123',
        username: 'whatever'
    }
}*/

const getUser = () => ({ //implicit return of an object
    uid: '123',
    username: 'whatever'
});

const user = getUser();
console.log(user);


//TAREA

const getUsuarioActivo = (nombre) => (
     {
         uid: '123456',
         username: nombre
     }
);

const usuarioActivo = getUsuarioActivo('Johnny');
console.log(usuarioActivo);
