import React, { Component } from 'react';
import { asideDataCleaner, planetDataCleaner } from '../../helper.js';
import { getPeople, getPlanetData } from '../../api-helper.js'
import Header from '../Header';
import Aside from '../Aside';
import CardContainer from '../CardContainer';
import './styles.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      asideData: {},
      people: [],
      planets: [],
      favorites: []
    }
  }

  componentDidMount() {
    this.getMovie('https://swapi.co/api/films/')
    this.getPlanet('https://swapi.co/api/planets/')
  }

  peopleState = () => {
    this.getPeople('https://swapi.co/api/people/') 
  } 

  getPeople = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => this.fetchPeople(data.results))
    .then(next => this.fetchSpecies(next)) 
    .then(people => this.setState({ people }))
  }

  fetchPeople = (arr) => {
    const unresolvedPromises = arr.map(peep => {
      return fetch(peep.homeworld)
        .then(response => response.json())
        .then(homeworld => ({...peep, homeworld: homeworld.name, homeworldPopulation: homeworld.population }))        
    })
    return Promise.all(unresolvedPromises)
  }

  fetchSpecies = (arr) => {
    const unresolvedPromises = arr.map(peep => {
      return fetch(peep.species)
        .then(response => response.json())
        .then(species => ({...peep, species: species.name}))
    })
    return Promise.all(unresolvedPromises)
  }


  getMovie = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ asideData: asideDataCleaner(data) }))
  }

  getResidents = (arr) => {
    const unresolvedPromises = arr.map(planet => {
      const p = planet.residents.map(resident => {
        return fetch(resident)
          .then(response => response.json())
          .then(results => ({...planet, residents: results.name }))
          // .then(a => console.log(a))
          .catch(error => console.log(error))
      })
      return Promise.all(p)
    })
    // console.log(p)
    return Promise.all(unresolvedPromises)
  }

  getPlanet = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => planetDataCleaner(data.results))
      .then(planets => this.getResidents(planets))
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
        <Header getPeople={ this.peopleState } />
        <Aside movie={ this.state.asideData } />
        <CardContainer 
          people={ this.state.people }
          favorite={ this.favorite } />
      </div>
    );
  }
}

export default App;
