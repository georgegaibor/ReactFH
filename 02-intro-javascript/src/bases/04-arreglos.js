//console.log('gg');

//Arreglos en js

const arreglo = [1,2,3,4]; //use Array() constructor only when you need it to be of a known length 

//arreglo.push(1);

let arreglo2 = [ ...arreglo, 5]; // ... spread operator 

const arreglo3 = arreglo2.map( element => {     //callback function to be applied on every element of the array
    return element+5;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);