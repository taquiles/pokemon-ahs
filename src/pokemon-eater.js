const Position = require ('./Position')
const Grid = require ('./Grid')



function pokemonEater (movements) {

  // console.log (movements);

  let grid = new Grid();
  let actualPos = new Position();
  

  
  // At root position there is one pokemon to eat;
  // The meal starts with one pokemon eaten
  grid.eatPokemon(actualPos.position); 
  let numberPokemonEaten= 1;
  
  if (movements) {
    movements= movements.split('');

    numberPokemonEaten= 
      movements.reduce ((numberPokemonEaten, move) => {
      //console.log ('move-', move);

        actualPos.changePosition (move);
        if (!grid.eatenPokemon(actualPos.getPos())) {
          grid.eatPokemon(actualPos.getPos())
          numberPokemonEaten++;
        }
        // console.log ('numberPokemonEaten-', numberPokemonEaten);
        //console.log ('actualPos.getPos-', actualPos.getPos());
        
        return (numberPokemonEaten);
      }, numberPokemonEaten)
    }
  return (numberPokemonEaten);
}

module.exports = pokemonEater;