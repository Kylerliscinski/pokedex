import { AppState } from "../AppState.js";


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

  async getPokemonByName(name) {
    const response = await pokemonApi.get(`pokemon/${name}`)
    console.log('pokemon index', response.data);
  }
}

export const pokemonsService = new PokemonsService()