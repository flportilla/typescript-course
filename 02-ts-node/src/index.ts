// import { getPokemon } from "./generics/get-pokemon"

// getPokemon(1)
//     .then(pokemon => console.log(pokemon.sprites))
//     .catch(error => console.error(error))
//     .finally(() => console.log('end'))

import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('charmander')

// (Pokemon.prototype as any).customName = 'pok'
// charmander.savePokemonToDB(0)

console.log(charmander)