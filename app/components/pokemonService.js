import Pokemon from "../models/pokemon.js";
import ActivePokemon from "../models/activePoke.js";

// @ts-ignore
let _pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

// @ts-ignore
let _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jamie/heroes'
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

  get Pokedex() {
    return _state.pokeDex.map(p => new ActivePokemon(p))
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

  addToTeam(name) {
    let poke = _state.pokeActive
    let myPoke = _state.pokeDex.find(p => p.name == poke.name)
    if (myPoke) {
      alert('duplicate Pokemon')
      return
    }
    _sandbox.post('', poke)
      .then(res => {
        this.getMyTeamData()
      })
      .catch(err => {
        console.log(err)
      })
  }
  //GET DATA
  getMyTeamData() {
    _sandbox.get()
      .then(res => {
        let data = res.data.data.map(p => new ActivePokemon(p))
        setState('pokeDex', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

}