

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.types = data.types
    this.img = data.sprites?.front_default || data.img
  }


  static PokemonListTemplate(pokemonName) {
    return `
    <button onclick="app.PokemonsController.getPokemonByName('${pokemonName}')" class="btn border border-bottom p-2 w-100 text-start text-light mb-2 selectable">
    ${pokemonName}
    </button>
  `
  }

  get ActivePokemonCard() {
    return `
    <div class="card shadow rounded w-50 text-dark">
      <div class="card-top">
      <img width="100%"
        src="${this.img}"
        alt="">
      </div>
      <div class="card-title text-center">
      <h2>${this.name}</h2>
      </div>
      <div class="card-body">
      <p>Type: </p>
      <p>Height: ${this.height}</p>
      <p>Weight: ${this.weight}</p>
      </div>
      <div class="card-footer text-end">
      <button onclick="app.SandboxPokemonsController.savePokemonToPokedex()" class="btn btn-success">Catch</button>
      </div>
    </div>
    `
  }

  get MyPokemonTemplate() {
    return `
    <div onclick="app.SandboxPokemonController.setActivePokemonFromPokedex('${this.name}')" class="row align-items-center border-bottom border-primary pb-1 mb-2 selectable">
      <div class="col">${this.name}</div>
      </div>
    </div>
    `
  }
}