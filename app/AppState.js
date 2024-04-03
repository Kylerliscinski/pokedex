import { Pokemon } from "./models/Pokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {{name: String, index: String, url: String}[]} */
  pokemonsApi = []

  /**@type {Pokemon} */
  activePokemon = null

  /**@type {Pokemon[]} */
  myPokemons = []
}

export const AppState = createObservableProxy(new ObservableAppState())