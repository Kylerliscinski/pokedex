import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class PokemonsController {
  constructor() {
    console.log('Here come the pokemon');
    this.getPokemons()
    AppState.on('pokemonsApi', this.drawPokemonList)
    AppState.on('activePokemon', this.drawActivePokemon)
  }

  async getPokemons() {
    try {
      await pokemonsService.getPokemons()
    } catch (error) {
      console.error(error)
      Pop.toast("Could not Get Pokemons, try catching more", 'error')
    }
  }

  async getPokemonByName(pokemonName) {
    try {
      console.log('pokemons', pokemonName);
      await pokemonsService.getPokemonByName(pokemonName)
    } catch (error) {
      console.error(error)
      Pop.toast(`Could Not Get ${pokemonName}`, 'error')
    }
  }

  drawPokemonList() {
    const pokemons = AppState.pokemonsApi
    let pokemonsList = ''
    pokemons.forEach(pokemon => pokemonsList += Pokemon.PokemonListTemplate(pokemon.name))
    setHTML('pokemons-list', pokemonsList)
  }

  drawActivePokemon() {
    const activePokemon = AppState.activePokemon
    setHTML('active-pokemon', activePokemon.ActivePokemonCard)
  }
}