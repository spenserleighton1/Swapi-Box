import { planetDataCleaner, asideDataCleaner } from './helper.js'

export const getPeople = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(data => fetchPeople(data.results))
  .then(next => fetchSpecies(next)) 
  .catch(error => console.log(error))
}

export const fetchPeople = (arr) => {
  const unresolvedPromises = arr.map(peep => {
    return fetch(peep.homeworld)
      .then(response => response.json())
      .then(homeworld => ({...peep, homeworld: homeworld.name, homeworldPopulation: homeworld.population }))        
  })
  return Promise.all(unresolvedPromises)
}

export const fetchSpecies = (arr) => {
  const unresolvedPromises = arr.map(peep => {
    return fetch(peep.species)
      .then(response => response.json())
      .then(species => ({...peep, species: species.name}))
  })
  return Promise.all(unresolvedPromises)
}

export const getMovie = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => asideDataCleaner(data))
}

export const getResidents = (arr) => {
  const unresolvedPromises = arr.map(planet => {
    this.getResidentNames(planet.residents)
      .then(names => planet.residents = names)
    return planet;
  })
  return Promise.all(unresolvedPromises)
}

export const getResidentNames = (arr) => {
  const unresolvedPromises = arr.map(resident => {
    return fetch(resident)
            .then(response => response.json())
            .then(resident => resident.name)
  })
  return Promise.all(unresolvedPromises)
}

export const getPlanets = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => planetDataCleaner(data.results))
    .then(planets => this.getResidents(planets))  
    .then(state => this.setState({ planets: state }))
    .catch(error => console.log(error))
}







