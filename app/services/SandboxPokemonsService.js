import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js"



class SandboxPokemonsService {

  async getMyPokedex() {
    const response = await api.get('api/pokemon')
    // console.log('📕🦧', response.data);
    const myPokemons = response.data.map(pokemon => new Pokemon(pokemon))
    AppState.myPokemons = myPokemons
  }

  async savePokemonToPokedex() {
    console.log('saving', AppState.activePokemon.name);
    const response = await api.post('api/pokemon', AppState.activePokemon)
    console.log('💾🦧', response.data);
    const pokemon = new Pokemon(response.data)
    AppState.myPokemons.push(pokemon)
  }

  setActivePokemonFromPokedex(pokemonName) {
    const selectedPokemon = AppState.myPokemons.find(pokemon => pokemon.name == pokemonName)
    console.log('setting', selectedPokemon);
    AppState.activePokemon = selectedPokemon
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService