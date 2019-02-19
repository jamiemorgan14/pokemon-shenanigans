export default class ActivePokemon {
  constructor(data) {
    this.name = data.name;
    this.url = data.url
    this.img = data.img || data.sprites.front_default;
    this.type = data.type || data.types[0].type.name;
    this.moves1 = data.moves1 || data.moves[0].move.name
    this.moves2 = data.moves2 || data.moves[1].move.name
  }
  getCard() {
    return `<div class="col-12">
              <div class="card text-center">
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">${this.name}</p>
                  <a href="#" class="btn btn-primary">Add to Pokedex</a>
                </div>
              </div>
            </div>
          </div>
          `
  }
}
