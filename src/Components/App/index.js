import React, { Component } from 'react';
import { asideDataCleaner, planetDataCleaner, vehicleCleaner } from '../../helper.js';
import { getPeople, getPlanetData, getM } from '../../api-helper.js'
import Header from '../Header';
import Aside from '../Aside';
import CardContainer from '../CardContainer';
import './styles.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      movie: {},
      people: [],
      planets: [],
      favorites: [],
      vehicles: []
    }
  }

  componentDidMount() {
    this.getMovie('https://swapi.co/api/films/')    
  }

  peopleState = () => {
    this.getPeople('https://swapi.co/api/people/') 
  } 

  planetState = () => {
    this.getPlanets('https://swapi.co/api/planets/')
  }

  vehicleState = () => {
    this.getVehicles('https://swapi.co/api/vehicles/')
  }

  getVehicles = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ vehicles: vehicleCleaner(data.results)}))
  }

  getPeople = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => this.fetchPeople(data.results))
    .then(next => this.fetchSpecies(next)) 
    .then(people => this.setState({ people }))
  }

  fetchPeople = (characters) => {
    const unresolvedPromises = characters.map(character => {
      return fetch(character.homeworld)
        .then(response => response.json())
        .then(homeworld => ({...character, homeworld: homeworld.name, homeworldPopulation: homeworld.population }))        
    })
    return Promise.all(unresolvedPromises)
  }

  fetchSpecies = (characterSpecies) => {
    const unresolvedPromises = characterSpecies.map(character => {
      return fetch(character.species)
        .then(response => response.json())
        .then(species => ({...character, species: species.name}))
    })
    return Promise.all(unresolvedPromises)
  }


  getMovie = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ movie: asideDataCleaner(data) }))
  }

  getResidents = (planets) => {
    const unresolvedPromises = planets.map(planet => {
      this.getResidentNames(planet.residents)
        .then(names => planet.residents = names)
      return planet;
    })
    return Promise.all(unresolvedPromises)
  }

  getResidentNames = (residents) => {
    const unresolvedPromises = residents.map(resident => {
      return fetch(resident)
        .then(response => response.json())
        .then(resident => resident.name)
        .catch(error => console.log(error))
    })
    return Promise.all(unresolvedPromises)
  }

  getPlanets = (url) => {
    return fetch(url)
      .then(response => response.json())
      .then(planets => planetDataCleaner(planets.results))
      .then(planetResidents => this.getResidents(planetResidents))  
      .then(planets => this.setState({ planets }))
      .catch(error => console.log(error))
  }

  favorite = (str) => {
    const favorite = this.state.people.find(item => {
      if(item.name === str) {
        return item.favorite = true
      } else {
        return item.favorite = false
      }
    })
    this.setState({ favorites: [favorite, ...this.state.favorites]})
  }

  render() {
    return (
      <div className="App">
        <Header getPeople={ this.peopleState }
                getPlanets={ this.planetState } 
                getVehicles= { this.vehicleState } />
        <Aside movie={ this.state.movie } />
        <CardContainer 
          planets={ this.state.planets }
          people={ this.state.people }
          favorite={ this.favorite } />
      </div>
    );
  }
}

export default App;
