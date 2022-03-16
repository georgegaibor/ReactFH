const nombre = 'George';
const apellido = 'Gaibor';

//const nombreCompleto = nombre + ' ' +apellido;   REGULAR CONCAT

const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`; //template string


console.log(nombreCompleto);

function getSaludo(nombre){

    return 'Hola '+nombre;

}

console.log(`Template string con nombre: ${ getSaludo(nombre) }`);