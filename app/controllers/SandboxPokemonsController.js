import { AppState } from "../AppState.js";
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";



export class SandboxPokemonsController {
  constructor() {
    console.log('Sandbox');
    AppState.on('myPokemons', this.drawMyPokemons)
    AppState.on('myPokemons', this.drawPokemonCount)
    AppState.on('account', this.getMyPokedex)
  }

  async getMyPokedex() {
    try {
      await sandboxPokemonsService.getMyPokedex()
    } catch (error) {
      Pop.toast("cant find your pokemon")
      console.error(error)
    }
  }

  async savePokemonToPokedex() {
    try {
      await sandboxPokemonsService.savePokemonToPokedex()
    } catch (error) {
      Pop.toast("Can't catch Pokemon, go buy more pokeballs")
      console.error(error)
    }
  }

  drawMyPokemons() {
    const myPokemons = AppState.myPokemons
    let myPokedex = ''
    myPokemons.forEach(pokemon => myPokedex += pokemon.MyPokemonTemplate)
    setHTML('my-pokedex', myPokedex)
  }

  setActivePokemonFromPokedex(pokemonName) {
    console.log('Hi');
    sandboxPokemonsService.setActivePokemonFromPokedex(pokemonName)
  }

  drawPokemonCount() {
    const pokemonCount = AppState.myPokemons.length
    setText('pokemon-count', `${pokemonCount}`)
  }

  deletePokemonFromPokedex() {

  }
}