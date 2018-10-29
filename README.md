# pokemon-ahs
- How many Pokemon to hunt

This simple function returns the number of pokemons eaten, one per each movement. It would be nice... :-). At the first position there is one pokemon

- Run the function 

To run this execute the folowing docker comamnds:

`$ docker run taquiles/pokemon-eater <movements>`

In which movements takes N (NORTH), S(SOUTH), O(WEST), E(EAST) for movement directions.


- Some Examples

`$ docker run taquiles/pokemon-eater NNSS`

`$ 3`

`$ docker run taquiles/pokemon-eater OOOEEENN`

`$ 6`

`$ docker run taquiles/pokemon-eater NESO`

`$ 4`
