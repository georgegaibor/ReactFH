//console.log('gg');

//Array deestructuring

const personajes = ['jotaro','jolyne','johnny'];
console.log(personajes)

const [ p1 ] = personajes;
const [ ,p2 ] = personajes;

console.log(p1)
console.log(p2)


const retornaArr = () => {
    return ['ABC',123];

}

const [ letras, numeros] = retornaArr();
console.log(letras, numeros);


//TAREA

const stateUse = (valor) => {
     return [valor, ()=>{console.log('Hola')}];
}

const [nombre, setNombre] = stateUse('Josuke');
console.log(nombre)
setNombre();