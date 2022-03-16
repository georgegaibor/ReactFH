//console.log('gg');
// JAVASCRIPT PROMISES
/* 
Promises are asynchronous
*/

import { getHeroesById, getHeroesByOwner } from './bases/08-imp-exp'

/*
const promesa = new Promise( (resolve, reject)=> {
    setTimeout(() => {
        const heroe = getHeroesById(2);
        resolve(heroe);
        //reject('Heroe not found');
        //console.log('2 segundos despues') 
    }, 2000);

});

promesa.then( (heroe)=>{
    console.log(`Heroe: ${heroe.name}`)
}
).catch( err => console.warn(err));
*/

const getHeroesByIdAsync = (id) => {
    
    return new Promise( (resolve, reject)=> {
        
        setTimeout(() => {
            const heroe = getHeroesById(id);
            heroe ? resolve(heroe.name) : reject('Heroe not found');
        }, 2000);
    
    });
    
}

getHeroesByIdAsync(1)
.then(console.log)
.catch(console.warn);