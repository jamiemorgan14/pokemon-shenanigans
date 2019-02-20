export default class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name;
    this.url = data.url
  }

  getTemplate() {
    return `<h4 class="text-light" onclick="app.controllers.pokemonController.getDetails('${this.name}')">${this.name}</h4>`
  }
}
