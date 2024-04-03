import { AppState } from "../AppState.js";


// @ts-ignore
// eslint-disable-next-line no-undef
const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

class PokemonsService {

  async getPokemons() {
    const response = await pokemonApi.get('pokemons')
    console.log('pokemon', response.data);
    AppState.pokemonsApi = response.data.results
  }
}

export const pokemonsService = new PokemonsService()