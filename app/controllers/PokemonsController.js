import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";



export class PokemonsController {
  constructor() {
    console.log('Here come the pokemon');
    this.getPokemons()
  }

  async getPokemons() {
    try {
      await pokemonsService.getPokemons()
    } catch (error) {
      console.error(error)
      Pop.toast("Could not Get Pokemons, try cathing more", 'error')
    }
  }
}