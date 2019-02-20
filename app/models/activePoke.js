export default class ActivePokemon {
  constructor(data) {
    this.name = data.name;
    this.url = data.url
    this.img = data.img || data.sprites.front_default;
    this.description = data.description || data.types[0].type.name;
  }
  getCard() {
    return `<div class="col-12">
              <div class="card text-center">
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title mt-0">${this.name}</h5>
                  <p class="card-text">${this.description}</p>
                  <a href="#" class="btn btn-primary" onclick="app.controllers.pokemonController.addToTeam('${this.name}')">Add to Pokedex</a>
                </div>
              </div>
            </div>
          </div>
          `
  }
}
