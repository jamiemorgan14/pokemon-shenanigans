import Pokemon from "../models/pokemon.js";
import ActivePokemon from "../models/activePoke.js";

let _pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Common/heroes'
})

let _state = {
  pokeList: [],
  pokeActive: {},
  pokeDex: []
}

let _subscribers = {
  pokeList: [],
  pokeActive: [],
  pokeDex: []
}

function setState(prop, data) {
  _state[prop] = data;
  _subscribers[prop].forEach(fn => fn())
}






export default class PokemonService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get PokeList() {
    return _state.pokeList.map(p => new Pokemon(p))
  }

  get PokeActive() {
    return new ActivePokemon(_state.pokeActive)
  }

  getPokeData(name = '') {
    _pokeApi.get()
      .then(res => {
        let data = res.data.results.map(p => new Pokemon(p))
        setState('pokeList', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  getDetails(name) {
    _pokeApi.get(name)
      .then(res => {
        let data = new ActivePokemon(res.data)
        setState('pokeActive', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}