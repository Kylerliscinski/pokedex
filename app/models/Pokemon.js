

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.type = data.type
    this.imgUrl = data.sprites.front_default
  }


  static PokemonListTemplate(pokemonName) {
    return `
    <button onclick="app.PokemonsController.getPokemonByName('${pokemonName}')" class="btn border border-bottom p-2 w-100 text-start mb-2 selectable">
    ${pokemonName}
    </button>
  `
  }

  get ActivePokemonCard() {
    return `
    <div class="card shadow rounded w-50">
      <div class="card-top">
      <img width="100%"
        src="${this.imgUrl}"
        alt="">
      </div>
      <div class="card-title text-center">
      <h2>${this.name}</h2>
      </div>
      <div class="card-body">
      <p>${this.type}</p>
      <p>${this.height}</p>
      <p>${this.weight}</p>
      </div>
      <div class="card-footer text-end">
      <button class="btn btn-success">Catch</button>
      </div>
    </div>
    `
  }
}