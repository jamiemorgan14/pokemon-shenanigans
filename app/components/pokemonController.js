import PokemonService from "./pokemonService.js";


let _pokemonService = new PokemonService

function drawAllPokemon() {
  let template = '';
  let pokemon = _pokemonService.PokeList;
  pokemon.forEach(p => {
    template += p.getTemplate()
  })
  document.getElementById('list').innerHTML = template
}

function drawActive() {
  let template = '';
  let poke = _pokemonService.PokeActive;
  template = poke.getCard()
  document.getElementById('poke-active').innerHTML = template
}

function drawMyTeam() {
  let template = '';
  let poke = _pokemonService.Pokedex;
  poke.forEach(p => {
    template += p.getCard()
  })
  document.getElementById('pokedex').innerHTML = template
}

export default class PokemonController {
  constructor() {
    _pokemonService.addSubscriber('pokeList', drawAllPokemon);
    _pokemonService.addSubscriber('pokeActive', drawActive)
    _pokemonService.addSubscriber('pokeDex', drawMyTeam)
    _pokemonService.getPokeData()
    _pokemonService.getMyTeamData()
  }
  getDetails(name) {
    _pokemonService.getDetails(name);
  }

  addToTeam(name) {
    _pokemonService.addToTeam(name)
  }
}