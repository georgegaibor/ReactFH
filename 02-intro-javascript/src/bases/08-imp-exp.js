//console.log('gg');
//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes'; non-default import

//default import
//import heroes from './data/heroes';

//default and individual import
//import heroes, { owners } from '../data/heroes'
import heroes from '../data/heroes'

//console.log(owners);

//SEARCH BY ID (UNIQUE)

export const getHeroesById = (numid) => {
    return heroes.find( heroe => heroe.id === numid );
}

//const searchId = 3;

//console.log(`Heroe #${searchId}:`, getHeroesById(searchId).name );


//SEARCH BY OWNER (NOT UNIQUE)

//const searchDC = 'DC';
//const searchMarvel = 'Marvel';

export const getHeroesByOwner = (ownerName) => {
    heroes.filter( heroe => heroe.owner === ownerName );
    //.forEach(ownerHeroe => console.log(ownerHeroe.name));
}

//console.log(`${searchDC} Heroes:`)
//getHeroesByOwner(searchDC);

//console.log(`${searchMarvel} Heroes:`)
//getHeroesByOwner(searchMarvel);
