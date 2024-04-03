import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";


// @ts-ignore
// eslint-disable-next-line no-undef
const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 4000
})

class PokemonsService {

  async getPokemons() {
    const response = await pokemonApi.get('pokemon')
    console.log('pokemon', response.data);
    AppState.pokemonsApi = response.data.results
  }

  async getPokemonByName(pokemonName) {
    const response = await pokemonApi.get(`pokemon/${pokemonName}`)
    console.log('pokemon index', response.data);
    const pokemon = new Pokemon(response.data)
    AppState.activePokemon = pokemon
  }
}

export const pokemonsService = new PokemonsService()