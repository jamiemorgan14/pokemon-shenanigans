export default class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.url = data.url
    // this.img = data.img || data.sprites.front_default;
    // this.type = data.type || data.types[0].type.name;
    // this.moves1 = data.moves1 || data.moves[0].move.name
    // this.moves2 = data.moves2 || data.moves[1].move.name
  }

  getTemplate() {
    return `<h4 class="text-light" onclick="app.controller.pokemonController.getInfo('${this.name}')">${this.name.toUpperCase()}</h4>`
  }



  getCard() {
    return `<div class="col-12 col-md-6">
              <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Pokemon Name</h5>
                  <p class="card-text">Description</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          `
  }
}
